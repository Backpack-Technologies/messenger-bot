'use strict';
const BootBot = require('bootbot');
const amazonPrice = require('./Components/AmazonPrice')
const data = require('./Data/data')
const backpackSearch = require('./Components/BackpackSearch')

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('/certs/tls.key', 'utf8');
var certificate = fs.readFileSync('/certs/tls.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(2900);
httpsServer.listen(3000);

app.get('*', (req, res) => {
  var url = "http://" + req.host + ":3100" + req.url;
  res.redirect(307,url);
});

app.post('*', (req, res) => {
  var url = "http://" + req.host + ":3100" + req.url;
  res.redirect(307,url);
});

const bot = new BootBot({
  accessToken: "EAAfsZAH9N8uwBAMdxziYPr0IqAa2ElVGS1Lva7duqW9G5OSJgOFQC1MSFeMhSn3hJVuM9RUJytZA4Vy1hwTrJxxl4ZBZAVokdphovnZBCIEZAoU8GoTrYye0LXc5BprWdqZBPxHk2hzJPIyKZBaWy85o9EJXkTOFXzyIe7JRZBCngrQZDZD",
  verifyToken: "test-test",
  appSecret: "eb96bc541c44c82904c9e5da3ae040ad"
});

bot.on('message', (payload, chat) => {
	const text = payload.message.text;
  console.log(`The user said: ${text}`);
});

bot.hear(['hello', 'hi', /hey( there)?/i, 'Get started'], (payload, chat) => {
  chat.getUserProfile().then((user) => {
    chat.say({
      text: data.welcome.text(user),
      quickReplies: data.welcome.options
    }, { typing: 200 });
  }).catch(err => {
    console.log(err);
  })
});

bot.hear(/.*amazon.com\/.*/i, async (payload, chat) => {
  const link = payload.message.text;
  const asin = amazonPrice.getAsinFromLink(link);
  if(asin.length < 10) {
    chat.say('Bad link appeared. Please give link from https://www.amazon.com/');
  }
  else {
    const item = await amazonPrice.amazonPrice(asin);
    if(!item || !item.totalPrice) {
      chat.say(
`
The Product is not available right now. You have to do manual request.
To request manually follow the steps-

1. Copy your item link from the US-based website
2. Paste item link to search bar of Backpackbang.com
3. Press ok
4. Add your notes if you want to add with the item. Ex: size, color etc.
5. Press request item.

We will review the item and get back to you within 24 hours. 

For more: https://support.backpackbang.com/hc/en-us/articles/115002629552-How-do-I-request-an-item-
`
      )
    }
    else {
      chat.say([
        `So you want to buy "${item.name}"`,
        `The price is ${item.totalPrice.value} BDT`,
        `If you want to buy this product go to this link: https://backpackbang.com/item/${asin}` 
      ], {typing: 200}).then(() => {
        
        chat.say({
          text: 'Want to get started?',
          quickReplies: ['Get Started']
        })
      })

    }
  }
})

bot.hear(['Find an item', /.*search.*/i, /.*look.*/i], (payload, chat) => {

	const askProduct = (convo) => {
		convo.ask(`What do you want to buy? Just mention the product name.`, (payload, convo) => {
			const text = payload.message.text;
			convo.set('product', text);
			convo.say(`Oh, you want to buy "${text}"`).then(() => sendSummary(convo));
		});
	};

	const sendSummary = async (convo) => {
    convo.say('Here are the top products I have found for you', {typing: 2000});
    const query = convo.get('product');
    const results = await backpackSearch.backpackSearch(query);
    
    const cards = results.slice(0,10).map(item => {
      return {
        title: item.name.length > 80 ? item.name.slice(0, 80) : item.name,
        subtitle: 'Price: ' + item.totalPrice.value + " BDT",
        image_url: item.image,
        default_action: {
          type: 'web_url',
          url: 'https://backpackbang.com/item/' + item.asin
        }
      }
    });
    convo.say({
      cards: cards
    });
      convo.end();
	};

	chat.conversation((convo) => {
		askProduct(convo);
	});
});

const dfs = (node) => {
  if(!node || !node.options || !node.options.length) return;
  if(!node.answer || !node.answer.length) return;
  if(node.options.length == 1 && node.options[0] == "Get Started") return;

  for(let i=0; i<node.options.length; i++) {
    if(!node.answer[i].text) continue
    bot.hear(node.options[i], (payload, chat) => {
      if(node.answer[i].options) {
        chat.say({
          text: node.answer[i].text,
          quickReplies: node.answer[i].options
        }, {typing: 200})
      }
      else {
        chat.say(node.answer[i].text)
      }
    })
    dfs(node.answer[i]);
  }
}

dfs(data.welcome);
bot.start(3100);