const priceOfAItemOptionsAnswer = require('./PriceOfItem').priceOfItemOptionsAns
const newShopperOptionsAnswer = require('./NewShopper').newShopperOptionsAns
const existingShopperOptionsAnswer = require('./ExistingShopper').existingShopperOptionsAns
const travellerOptionsAnswer = require('./Traveller').travellerOptionsAns

const priceOfAItem = {
    text: "Where do you want your product from?",
    options: [
        'Amazon',
        'Other USA sites'
    ],
    answer: priceOfAItemOptionsAnswer
}
const findAItem = {
    // text: "What do you want to search?"
}
const valentineDayContest = {
    
}
const newShopper = {
    text: 'What do you want to know?',
    options: [
        'First Time', 
        'Payment', 
        'Delivery Methods', 
        'Manual Request', 
        'Refund Policy',
        'Return Policy',
        'Price Breakdown',
        'Delivery Time',
        'Request Product',
        'How to Order',
        'Why Trust Backpack'
    ],
    answer: newShopperOptionsAnswer
}
const existingShopper = {
    text: 
`Hey hows the day?

How can I help you today?`,
    options: [
        'Track Product',
        'Purchase Time',
        'Order Cancellation',
        'Missing Item',
        'Damaged Item',
        'Faulty Item',
        'Wrong Item',
        'Packaging Damaged',
        'Product Warranty',
        'Change Delivery',
        'Backpack Gifts'
    ],
    answer: existingShopperOptionsAnswer
}
const traveller = {
    text: 'What do you want to know?',
    options: [
        'How it works',
        'Sign Up as Traveller',
        'How much Payment',
        'Traveller Benefit',
        'Purchase Deposit',
        'Payment Procedure',
        'Lost Bag?',
        'Is it Safe?',
        'Verify as Traveller',
        'Contact Us'
    ],
    answer: travellerOptionsAnswer
}
const backpackBusiness = {
    text: 
`We are trying to expand the market from our side and looking for partners who can reach the audience in their platform which we can’t reach from our end. 
Our partnership initial model is based on a cashback system, the user will buy X amount and we will give them x% as cashback amount in backpack cash credit, which they can use for the future purchases.

For starting up, if you are a regular shopper at Backpack, you can write us an email, and then we can offer you a deal. For new shoppers, we are offering 5% cashback if they shop items greater than $1000 (minimum purchase amount) 
In fact, we are giving the cashback from our profits, for this reason, the amount will differ according to the products the shopper purchase from us.

We also have a tier system, where if you buy more, you will get more percentage from our side. For example, if the shopper spends 1000-1500$ we will offer minimum 5% cash back, for 1500-2000$ we will offer minimum 6%, and for greater than 2000$ it might reach up to minimum 7%.`,
    options: ['Ask other questions']
}
const others =  {
    text:
`Hi, I’ve informed our customer support team and they will respond to you soon!`,
    options: ['Ask other questions']  
}
const contactUs = {
    text:
`You can always send us an email at support@backpackbang.com;

You can also send us a message directly from your Backpack account through this link: https://backpackbang.com/backpack/messages

Also you can reach us at this 01757-869069 from 10 am to 6 pm ( Only business days )

If you have a connection page, you can send us messages directly from the message section on that page as well.

Happy Backpacking 😊`,
    options: ['Ask other questions']
}

const welcomeOptionsAns = [
    priceOfAItem,
    findAItem,
    valentineDayContest,
    newShopper,
    existingShopper,
    traveller,
    backpackBusiness,
    others,
    contactUs
]
module.exports = {
    welcomeOptionsAns
}