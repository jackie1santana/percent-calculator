import "./scss/app.scss";

//Percentage You agree upon in a business offer
const givenPercent = () => {
  const formInput = document.querySelector("#businessForm");

  const display = document.querySelector("#businessRes");
  formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    const percentValue = e.target[0].value.replace("%", "");
    let amountValue = e.target[1].value.replace(",", "");

    let moneyYouGet = percentValue * 0.01 * amountValue;

    moneyYouGet = moneyYouGet.toFixed(2);
    moneyYouGet = parseInt(moneyYouGet).toLocaleString();

    console.log(percentValue);
    console.log(amountValue);

    e.target[0].value = "";
    e.target[1].value = "";

    display.innerHTML =
      "<br> <br> <p>" +
      "If the offer is " +
      percentValue +
      "% of $" +
      parseInt(amountValue).toLocaleString() +
      "<br> The amount you will receive: $" +
      moneyYouGet +
      "</p>";
  });
};

//Price on Sale
const onSalePercent = () => {
  const formInput = document.querySelector("#onSaleForm");

  const display = document.querySelector("#onSaleRes");
  formInput.addEventListener("submit", (e) => {
    e.preventDefault();

    const wholePrice = e.target[0].value.replace(",", "");
    let salePercent = e.target[1].value.replace("%", "");

    const priceAfterDiscount = (100 - salePercent) * 0.01 * wholePrice;

    const moneySaved = wholePrice - priceAfterDiscount;

    display.innerHTML =
      "<br> <br> <p>" +
      "If the item is on sale for " +
      salePercent +
      "% and the current price is $" +
      wholePrice +
      "<br> Then the item would be: $" +
      moneySaved.toFixed(2) +
      "</p>";

    e.target[0].value = "";
    e.target[1].value = "";
  });
};

// 15% Tip for a waiter
const tipCalculator = () => {
  const formInput = document.querySelector("#tipForm");

  const display = document.querySelector("#tipRes");
  formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    let amount = e.target[0].value.replace(",", "");

    let tip = 15 * 0.01 * amount;
    let tip2 = 20 * 0.01 * amount;

    display.innerHTML =
      "<br> <br> <p>" +
      "15 percent tip would be: $" +
      tip.toFixed(2) +
      "<br> 20 percent tip would be: $" +
      tip2.toFixed(2);
    ("</p>");

    e.target[0].value = "";
  });
};

givenPercent();
onSalePercent();
tipCalculator();
