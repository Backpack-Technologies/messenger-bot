const paymentOptionsAnswer = require('./Payment').paymentOptionsAns

const firstTime = {
    text:
`Once you find your desired item and pay for it at checkout, we purchase it within the next 72 hours. Soon afterward, we send the purchased item to a traveler who’ll carry it for you in their luggage. Once in Bangladesh, we collect the item from the traveler and deliver it to your hands. The entire process typically takes around 16 days; simple yet magical! 

How to order:
Find the items you want to place an order for and add them to your cart. You can also place multiple manual requests and once approved you’ll find them

For more: https://support.backpackbang.com/hc/en-us/articles/115006191307-What-is-Backpack-How-do-I-order-items-`,
    options: ['Ask other questions']
}
const payment = {
    text:
`Hey shopper, so this is your first time. Welcome abroad.

How can I help you?`,
    options: [
        'Payment Method',
        'EMI',
        'Advance Payment',
        'Backpack Trust Issue',
        'Bank Deposit',
        'Pay in USD',
        'Dollar Rate',
        'Cash on Delivery',
        'Backpack Discount'
    ],
    answer: paymentOptionsAnswer
}
const deliveryMethods = {
    text: 
`Currently, we have two delivery methods available. When trying to decide between delivery and pickup here’s what you need to know:


1. If you choose Delivery we'll deliver the items to your doorsteps. We have a delivery charge of BDT 99 inside Dhaka and BDT 200 outside of Dhaka. Depending on the delivery address, we either provide home delivery or use a courier service.


2. If however, you choose pickup, that’s free of cost. This is how it works: Using our Backpack chat service we will send you a message telling you that your item is ready for pickup.`,
    options: ['Ask other questions']
}
const manualRequest = {
    text: 
`To request manually follow the steps-

1. Copy your item link from the US-based website
2. Paste item link to search bar of Backpackbang.com
3. Press ok
4. Add your notes if you want to add with the item. Ex: size, color etc.
5. Press request item.

We will review the item and get back to you within 24 hours. 

For more: https://support.backpackbang.com/hc/en-us/articles/115002629552-How-do-I-request-an-item-`,
    options: ['Ask other questions']
}
const refundPolicy = {
    text: `In any case of failure to deliver the product, we’ll refund you the full amount through the method you’ve used for payment. It usually takes 3 to 7 working days to receive the refund after it’s been processed.`,
    options: ['Ask other questions']
}
const returnPolicy = {
    text: `We want the product you get to be original and undamaged as much as you do. We always take an extra step to make sure that you are happy and you can count on us. There isn’t any formal return system yet but for any obvious problem we’ll accommodate your request to the best of our abilities.`,
    options: ['Ask other questions']
}
const priceBreakdown = {
    text: 
`The total price you pay is broken down into three parts - seller takes, traveler takes and Backpack takes. Here’s what each part means:

"Seller takes" includes the item price, sales tax, and shipping charge. The item price with our flat exchange rate of BDT 85.5 and add 9% (of the item price) as sales tax and the shipping charge for the item, if there is any.

“Traveler takes” is the money that goes to the traveler for packing, carrying, and safely delivering the item. The bigger or heavier the item, the more the traveler takes.`,
    options: ['Ask other questions']
}
const deliveryTime = {
    // TODO:
    text: "",
    options: ['Ask other questions']
}
const requestProduct = {
    text: 
`The reason you don’t see the Buy Now button on some items is that the item requires a Backpack admin's review.  Click on it and it will requested directly. 

We’ll review it and provide an update in the next 24 hours! If the request is approved, we’ll add it to your cart. If it isn’t, we’ll explain why we can’t deliver that particular item.`,
    options: ['Ask other questions']
}
const howToOrder = {
    text: `Find the items you want to place an order for and add them to your cart. You can also place multiple manual requests and once approved you’ll find them added in your cart. Now, click on your Shopping Cart and hit Pay to confirm your order.`,
    options: ['Ask other questions']
}
const whyTrustBackpack = {
    text: 
`We're an FDI approved free, online, peer-to-peer platform that connects shoppers and travelers to the global market. And we've been successfully operating for the past four years.

You can also check out this video revolving around our loyal shoppers: http://bit.ly/1QD3zWQ along with reviews on our Facebook page: http://bit.ly/2qdbS3e.`,
    options: ['Ask other questions']
}
const newShopperOptionsAns = [
    firstTime,
    payment,
    deliveryMethods,
    manualRequest,
    refundPolicy,
    returnPolicy,
    priceBreakdown,
    deliveryTime,
    requestProduct,
    howToOrder,
    whyTrustBackpack
]

module.exports = {
    newShopperOptionsAns
}