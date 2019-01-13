'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAADomVLmJ6gBALuttiCgcUiHYB8hYDGOKTI30NqlF0r5pQ8jadmCsMHElbUvO3tUXalOTw1XlqzLynuie5iPJMJyy8HoOYA9Nt0ONpEp56PfeE75opDa1lgvw8mXHf56Pc3RqVr2ca70RpxETtc6uNwl5RgfMVyjPzdgUwZDZD',
  verifyToken: 'FB_VERIFY_TOKENasdaddfdsfdseqwe123123esadasdew123123esasadsdw12',
  appSecret: '26fb8c67859ccd99652991e82bb5ce41'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});

bot.hear(['Hello', 'Hi', 'Hey'], (payload, chat) => {
    chat.say('Hello there');
})

bot.start();