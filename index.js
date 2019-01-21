'use strict';
const BootBot = require('bootbot');
const amazonPrice = require('./Components/AmazonPrice')
const data = require('./Data/data')

const bot = new BootBot({
  accessToken: "EAADomVLmJ6gBAPQL6wbZADfWpfMgBRjIhoSwFXKcBY4sKZBAgfUVt0fbZCJIaJzZCznD9sWHOdbYonCVxZA7JRXMU17kerYCrERZBrL3e60fMZCu7yHuWBeoxdPEXqw12bpZCecZCtH7yHWrUgaeuZARxDtrSS9BykWYWxh6hqIdHagQZDZD",
  verifyToken: "test-test",
  appSecret: "26fb8c67859ccd99652991e82bb5ce41"
});

bot.on('message', (payload, chat) => {
	const text = payload.message.text;
  console.log(`The user said: ${text}`);
  chat.say({
    text: text,
    quickReplies: ['Get Started']
  });
});

bot.hear(['hello', 'hi', /hey( there)?/i, 'Get started'], (payload, chat) => {
  chat.getUserProfile().then((user) => {
    chat.say({
      text: data.welcome.text(user),
      quickReplies: data.welcome.options
    });
  }).catch(err => {
    chat.say({
      text: data.welcome.text("user"),
      quickReplies: data.welcome.options
    });
  })
});

bot.hear(/.*amazon.com\/.*/i, async (payload, chat) => {
  console.log("asda");
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

const dfs = (node) => {
  if(!node || !node.options || !node.options.length) return;
  if(!node.answer || !node.answer.length) return;
  if(node.options.length == 1 && node.options[0] == "Get Started") return;

  for(let i=0; i<node.options.length; i++) {
    bot.hear(node.options[i], (payload, chat) => {
      if(node.answer[i].options) {
        chat.say({
          text: node.answer[i].text,
          quickReplies: node.answer[i].options
        })
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