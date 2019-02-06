'use strict';
const BootBot = require('bootbot');
const amazonPrice = require('./Components/AmazonPrice')
const data = require('./Data/data')
const backpackSearch = require('./Components/BackpackSearch')

const bot = new BootBot({
  accessToken: process.env.ACCESS_KEY,
  verifyToken: process.env.VERIFY_TOKEN,
  appSecret: process.env.APP_SECRET
});

let flg = false;

bot.on('message', (payload, chat) => {
	const text = payload.message.text;
  console.log(`The user said: ${text} and flag value ${flg}`);

  if(!flg) {
    chat.say({
      text: 'Hi, sorry I don’t know that. You could choose an option from the menu below or wait for our customer support team to respond!',
      quickReplies: data.welcome.options
    })
  }
  flg = false;
});

bot.hear(['hello', 'hi', /hey( there)?/i, 'Get started', 'Ask other questions'], (payload, chat) => {
  flg = true;
  const askFeedback = (convo) => {
    const question = {
      text: "What do you want to do?",
      quickReplies: ['Get help from bot', 'Wait for customer support']
    }

    const answer = (payload, convo) => {
      const text = payload.message.text;
      
      if(text == 'Get help from bot') {
        convo.say("Hi, I’m Backpack’s in-house bot, Backpackbot. I try to be helpful! I can help you find products and get you price quotes. I can also answer simple questions about how Backpack works.")
        .then(() => {
          const user = "undefined";
          convo.say({
            text: data.welcome.text(user),
            quickReplies: data.welcome.options
          }, { typing: 20 });
          
          convo.end();
        })
      }
      else {
        convo.say(`Hi, I’ve informed our customer support team and they will respond to you soon!`)
        convo.end();
      }
    }

    convo.ask(question, answer)
  }

  chat.conversation((convo) => {
    askFeedback(convo);
  })
});

bot.hear(/.*amazon.com\/.*/i, async (payload, chat) => {
  flg = true;
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
Sorry! The product is not currently available on our site. Though you can request manually from our site.

To request manually, just copy the link from the US site and paste it in the search bar on Backpack’s site. We will get back with a final quote in 24 hours.
`
      )

      chat.say({
        text: 'Manual Request now?',
        buttons: [
          { type: 'web_url', title: 'Go to site to place request', url: 'https://www.backpackbang.com' }
        ]
      }).then(() => {
        chat.say({
          text: 'Or ask other questions?',
          quickReplies: ['Ask other questions']
        })
      })
    }
    else {
      chat.say([
        `So you want to buy "${item.name}"`,
        `The price is ${item.totalPrice.value} BDT`,
        `If you want to buy this product go to this link: https://backpackbang.com/item/${asin}` 
      ], {typing: 20}).then(() => {
        
        chat.say({
          text: 'Want to get the item?',
          buttons: [
            { type: 'web_url', title: 'View item on Backpack', url: `https://backpackbang.com/item/${asin}` }
          ]
        }).then(() => {
          chat.say({
            text: 'Or ask other questions?',
            quickReplies: ['Ask other questions']
          })
        })
      })

    }
  }
})

bot.hear(['Find an item', /.*search.*/i, /.*look.*/i], (payload, chat) => {
  flg = true;
	const askProduct = (convo) => {
		convo.ask(`What do you want to buy? Just mention the product name please.`, (payload, convo) => {
			const text = payload.message.text;
			convo.set('product', text);
			convo.say(`Oh, you want to buy "${text}"`).then(() => sendSummary(convo));
		});
	};

	const sendSummary = async (convo) => {
    convo.say('Here are the top products I have found for you');
    convo.say("Please wait, it's taking some time", { typing: 20 })
    const query = convo.get('product');
    const results = await backpackSearch.backpackSearch(query);
    
    const cards = results.slice(0,10).map(item => {
      return {
        title: item.name.length > 80 ? item.name.slice(0, 80) : item.name,
        subtitle: 'Price: ' + amazonPrice.priceSeparator(item.totalPrice.value) + " BDT",
        image_url: item.image.replace('_UL900_','_UL200_'),
        default_action: {
          type: 'web_url',
          url: 'https://backpackbang.com/item/' + item.asin
        }
      }
    });
    convo.say({
      cards: cards
    }).then(() => {
      convo.say({
        text: 'Any other questions?',
        quickReplies: ['Ask other questions']
      })
    })
    convo.end();
  };

	chat.conversation((convo) => {
    askProduct(convo);
	});
});

bot.hear('Other USA sites', (payload, chat) => {
  flg = true;
  chat.say({
    text: 
`You have to do manual request for other sites.
To request manually, just copy the link from the US site and paste it in the search bar on Backpack’s site. 

We will get back with a final quote in 24 hours.

For more: https://support.backpackbang.com/hc/en-us/articles/115002629552-How-do-I-request-an-item-`,
  buttons: [
      { type: 'web_url', title: 'Place manual request', url: `https://backpackbang.com/` }
    ]
  }).then(() => {
    chat.say({
      text: 'Or ask other questions?',
      quickReplies: ['Ask other questions']
    })
  })
})

bot.hear('Valentine’s Day cont...', (payload, chat) => {
  flg = true;
  chat.say('Hi, I’ve informed our customer support team and they will respond to you soon!')
})

const dfs = (node) => {
  if(!node || !node.options || !node.options.length) return;
  if(!node.answer || !node.answer.length) return;
  if(node.options.length == 1 && node.options[0] == "Get Started") return;

  for(let i=0; i<node.options.length; i++) {
    if(!node.answer[i].text) continue
    bot.hear(node.options[i], (payload, chat) => {
      flg = true;
      if(node.answer[i].options) {
        chat.say({
          text: node.answer[i].text,
          quickReplies: node.answer[i].options
        }, {typing: 20})
      }
      else {
        chat.say(node.answer[i].text)
      }
    })
    dfs(node.answer[i]);
  }
}

dfs(data.welcome);
bot.start();



var fs = require('fs');
var http = require('http');
var https = require('https');

var privateKey  = fs.readFileSync('/certs/tls.key', 'utf8');
var certificate = fs.readFileSync('/certs/tls.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var proxy = require('express-http-proxy');
var app = require('express')();

app.use('/', proxy('http://localhost:3000', {
  forwardPath: function (req, res) {
    return 'http://localhost:3000' + req.url
  }
}))

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(7900);
httpsServer.listen(7000);
