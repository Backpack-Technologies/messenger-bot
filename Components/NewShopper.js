const data = require('../Data/data');

module.exports = (bot) => {
    
    bot.hear('New Shopper', (payload, chat) => {
        chat.say({
            text: data.newShopper.text,
            quickReplies: data.newShopper.options
        }, {typing: 400})
    })
}