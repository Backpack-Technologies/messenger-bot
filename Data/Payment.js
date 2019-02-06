const paymentMethod = {
    text:
`Currently, we accept payments by bKash, bank deposit/Electronic Fund Transfer (EFT), through credit/debit cards like VISA or MasterCard, or using internet banking with the SSLCommerz gateway. Also, if you want to pay with USD, you can use your PayPal account or in case you have a dual currency/international debit/credit card, you can choose the Stripe gateway.

For more: https://support.backpackbang.com/hc/en-us/articles/115006191987-How-do-I-pay-for-items-`,
    options: ['Ask other questions']
}
const emi = {
    text:
`You can go through this article to know about our payment system

https://support.backpackbang.com/hc/en-us/articles/360019928972-How-to-pay-with-EMI-`,
    options: ['Ask other questions']
}
const advancePayment = {
    text: 
`You can go through this to find more about advance paymet:

https://support.backpackbang.com/hc/en-us/articles/115006372528-Do-I-have-to-make-payment-in-advance-`,
    options: ['Ask other questions']
}
const backpackTrustIssue = {
    text:
`We're an FDI approved free, online, peer-to-peer platform that connects shoppers and travelers to the global market. And we've been successfully operating for the past four years.

You can also check out this video revolving around our loyal shoppers: http://bit.ly/1QD3zWQ along with reviews on our Facebook page: http://bit.ly/2qdbS3e.`,
    options: ['Ask other questions']
}
const bankDeposit = {
    text:
`Please go through this to know how to do Bank Deposit:

https://support.backpackbang.com/hc/en-us/articles/115006421887-How-do-I-make-a-bank-deposit-to-pay-for-my-item-`,
    options: ['Ask other questions']
}
const payInUsd = {
    text:
`You can avail some offers when you pay in USD. Go through this article to know more: 

https://support.backpackbang.com/hc/en-us/articles/360002569491--Do-I-get-a-discount-if-I-pay-using-USD-`,
    options: ['Ask other questions']
}
const dollarRate = {
    text:
`Currently, we are charging BDT85.5/USD`,
    options: ['Ask other questions']
}
const cashOnDelivery = {
    text: 
`We're very sorry that we don't have any cash on delivery option. We can bring items within 16 days once you make the payment.

However, we've some verified payment options like bKash, bank deposit, and credit/ debit card which are more secure than cash on delivery. You can choose any of them at your convenience.

Please let us know if you need any further help.

Thanks!`,
    options: ['Ask other questions']
}
const backpackDiscount = {
    text: 
`If you’re looking to get a discount, simply make your payments in USD and you’ll get a discount.
 
Otherwise, we don’t directly offer discounts. However, if the sellers offer discounts on any product, we’d be happy to help you avail that.`,
    options: ['Ask other questions']
}
const paymentOptionsAns = [
    paymentMethod,
    emi,
    advancePayment,
    backpackTrustIssue,
    bankDeposit,
    payInUsd,
    dollarRate,
    cashOnDelivery,
    backpackDiscount
]

module.exports = {
    paymentOptionsAns
}