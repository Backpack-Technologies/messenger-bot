const welcomeOptionsAns = require('./Welcome').welcomeOptionsAns;
module.exports = {
    welcome: {
        text: (user) => {
            return (
`How can I help you today? Please select an option from here? We’d be happy to help! 🙂 `
            )
        },
        options: [
            'Price of an Item',
            'Find an Item',
            'Valentine’s Day contest',
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