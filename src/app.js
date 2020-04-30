import './scss/app.scss'


//Percentage You agree upon in a business offer
const givenPercent = (percent, amount) => {
    const formInput = document.querySelector('#percentRes')
    console.log(formInput.name.value)

    formInput.addEventListener("click", (e) => {
        e.preventDefault()
        console.log('submit')
    })

    const moneyYouGet =  (percent * 0.01) * amount

    console.log(` Business Offer: ${percent}% of $${amount.toLocaleString()} \n The amount you will Receive: ${moneyYouGet.toFixed(2)}`)
}
 givenPercent(4, 14000)


//Price on Sale
const onSalePercent = (wholePrice, salePrice) => {
    const priceAfterDiscount = (100 - salePrice) * 0.01 * wholePrice

    const moneySaved = wholePrice - priceAfterDiscount

    console.log(` Current Price: $${wholePrice.toFixed(2)} \n It's On Sale For: ${salePrice}% \n The new price you pay is $${priceAfterDiscount.toFixed(2)} \n You Saved $${moneySaved.toFixed(2)}`)
}
 onSalePercent(600, 15)


// 15% Tip for a waiter
const _15tipCalculator = (bill) => {
    const tip = (15 * 0.01) * bill
    console.log(`15 Percent Tip: the tip you should leave is ${tip.toFixed(2)}`)
}
_15tipCalculator(25)


// 20% Tip for a waiter
const _20tipCalculator = (bill) => {
    const tip = (20 * 0.01) * bill
    console.log(`20 Percent Tip: the tip you should leave is ${tip.toFixed(2)}`)
}
 _20tipCalculator(20)



