const welcomeOptionsAns = require('./Welcome').welcomeOptionsAns;
module.exports = {
    welcome: {
        text: (user) => {
            return (
`Hi, ${user.first_name}! Nice to meet you.

We are Backpack. Backpack is a silicon valley based marketplace connecting shoppers and travelers with a keen eye on providing excellent overseas shopping and traveling experience.

Tell me something about yourself.`
            )
        },
        options: [
            'Price of a Item',
            // 'Find a Item',
            'New Shopper',
            'Existing Shopper',
            'Traveller',
            'Backpack Business',
            'Other',
            'Contact Us'
        ],
        answer: welcomeOptionsAns
    }
}