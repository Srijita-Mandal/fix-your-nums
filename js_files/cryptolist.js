const dropList = document.querySelectorAll("form select");
fromCurrency = document.querySelector(".from select");
//amount=document.getElementById("value").value;
//crypto=document.querySelector(".select-box").value;
toCurrency = document.querySelector(".to select");
getButton = document.querySelector("form button");
//ans=document.getElementById("exchange");
let convert=document.getElementById("button1");
let cryptolst={
    "BTC":20630.03,
    "ETH": 1476.63,
    "ETH2":1476.18,
    "USDT":1.01,
    "BNB":273.92,
    "MATIC":1.09,
    "DOGE":0.0664
};

function getExchangeRate(){
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;
    if (amountVal == "" || amountVal == "0") {
       amount.value = "";
       amountVal = 1;
       exchangeRateTxt.innerText = "Converting...";
    }
    let exchangeRate = cryptolst[fromCurrency.value];
    let totalExRate = (amountVal * exchangeRate).toFixed(2);
    exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} USD`;
    console.log(exchangeRateTxt);
}

getButton.addEventListener("click", () => {
  getExchangeRate();
});


