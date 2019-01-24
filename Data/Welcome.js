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
    options: ['Get Started']
}
const others =  {
    text:
`Thanks for writing in! Could you please send us a message through this link: https://backpackbang.com/backpack/messages so that we can check and help you with the process? Thank you!`,
    options: ['Get Started']  
}
const contactUs = {
    text:
`You can always send us an email at support@backpackbang.com; we'll get back to you within 30 minutes to an hour. You can also send us a message directly from your Backpack account through this link: https://backpackbang.com/backpack/messages 

You can also find us here - 1st Floor of House 292, Road 19/B, Mohakhali DOHS (http://imgur.com/tVdYupZ). Thanks!`,
    options: ['Get Started']
}
const welcomeOptionsAns = [
    priceOfAItem,
    findAItem,
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