'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAADomVLmJ6gBAIOdZCNpTWfvDrawhLPEKGhOZAqMeSXwRQpm7yywOKYyGv8v9aU0XEU50UWZCboAU7eiXtOA711yIS9tpJ4tSJ5ci74JrsZBfCba2fr7HJ2xzUUptttFwb5Tc4s6DJF7fUR3Ru34rYOZBMwQdUOuBWgnXSSoIwAZDZD',
  verifyToken: 'asdaddfdsfdseqwe123123esadasdew123123esasadsdw12asdaddfdsfdseqwe123123esadasdew123123esasadsdw12',
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