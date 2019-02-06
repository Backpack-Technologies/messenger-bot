const trackProduct = {
    text:
`You can track the current status of your ordered item from here - https://backpackbang.com/backpack/requests

Just click on the 'Track Package' button and you’ll see the details. If you’re not sure what’s going on, feel free to send us a message and we’ll get back to you with the update.`,
    options: ['Ask other questions']
}
const purchaseTime = {
    text:
`We usually purchase within 24 hours. Our Purchasing an item depends on traveler's availability and acceptance to carry the item. Also, we need to match traveler's flight date with the shipping time of the item. It takes 16 days to bring an item from the date of your payment.`,
    options: ['Ask other questions']
}
const orderCancellation = {
    text:
`Once you’ve confirmed an order and made the payment, we’ll purchase the item and connect with a traveler. Once the item is purchased and connected we don’t have the option to cancel the order. However, if your ordered item is not purchased then we’ll be happy to cancel your order.`,
    options: ['Ask other questions']
}
const missingItem = {
    text:
`If your item goes missing, we’ll send you a message about it through your connection page with the reason and provide you the options of repurchasing the product or refund.`,
    options: ['Ask other questions']
}
const damagedItem = {
    text:
`If we receive a damaged item, we’ll send you a message about it through your connection page with the details and provide you the options of repurchasing the product or refund. 

However, if there’s a minor damage we’ll call you and ask for your confirmation before delivering your item.`,
    options: ['Ask other questions']
}
const faultyItem =  {
    text:
`On the rare occasion that you receive a faulty item, the first thing you should do is notify Backpack support through support@backpackbang.com or your connection page. We’ll investigate the item and if your claim is right, we’ll help you with claiming the warranty or returning the item. Please note that for any obvious problem we’ll accommodate your request to the best of our abilities.`,
    options: ['Ask other questions']
}
const wrongItem = {
    text:
`On the rare occasion that you receive a wrong item, the first thing you should do is notify Backpack support through support@backpackbang.com or your connection page. We’ll investigate the item and if your claim is right, we’ll help you with claiming the warranty or returning the item. Please note that for any obvious problem we’ll accommodate your request to the best of our abilities.`,
    options: ['Ask other questions']
}
const packagingDamaged = {
    text:
`If we receive an item with packaging damage, we’ll send you a message about it through your connection page with the details and we’ll call you to ask for your confirmation before delivering your item.`,
    options: ['Ask other questions']
}
const productWarranty = {
    text: 
`If the item you’ve received is found damaged/faulty/not working/wrong model/wrong size or color purchased, then we will either repurchase the item or will provide a full refund depending on your preference. 

We’ll investigate your claim upon receiving the item at our pick up point and help you through the process.`,
    options: ['Ask other questions']
}
const changeDelivery = {
    text:
`After an invoice has been paid for and a delivery method has been selected during checkout, it gets locked into our system. After that, we do not have an option to change it.`,
    options: ['Ask other questions']
}
const backpackGifts = {
    text:
`It’s easy to get rewarded with Backpack. Give your friend ৳200 gift, you will get ৳500 when they try Backpack. Spread the happiness with your link from here - https://backpackbang.com/gifts

Please note that, for ৳500 gift codes, the minimum order value is ৳2500. Just proceed to checkout and claim your gift!`,
    options: ['Ask other questions']
}
const existingShopperOptionsAns = [
    trackProduct,
    purchaseTime,
    orderCancellation,
    missingItem,
    damagedItem,
    faultyItem,
    wrongItem,
    packagingDamaged,
    productWarranty,
    changeDelivery,
    backpackGifts
]

module.exports = {
    existingShopperOptionsAns
}