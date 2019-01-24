const welcomeOptionsAns = require('./Welcome').welcomeOptionsAns;
module.exports = {
    welcome: {
        text: (user) => {
            return (
`Hi, ${user.first_name}!  Thanks for writing in! 

How can we help you today? Please select an option from here? We’d be happy to help! 🙂 `
            )
        },
        options: [
            'Price of an Item',
            'Find an Item',
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