let money = document.getElementById("inpnum");
let btn = document.querySelector("button");
let coinCount = document.querySelectorAll("h1");
let userNum = document.querySelector("h3");
let quater = 0;
let dime = 0;
let nick = 0;
let penny = 0;
btn.addEventListener("click", function () {

    coinCount[1].innerHTML = "0 Coin";
    coinCount[2].innerHTML = "0 Coin";
    coinCount[3].innerHTML = "0 Coin";
    coinCount[4].innerHTML = "0 Coin";
    userNum.innerHTML = "Yor changable Money " + money.value;

    while (money.value === "" || money.value != 0) {
        if (money.value == "") {
            alert("Please Enter Valid Number");
            money.focus();
            return;
        }
        else if (money.value >= 25) {
            money.value = money.value - 25;
            quater++;
            coinCount[1].innerHTML = quater + " Coin";
        }
        else if (money.value >= 10) {
            money.value = money.value - 10;
            dime++;
            coinCount[2].innerHTML = dime + " Coin";
        }
        else if (money.value >= 5) {
            money.value = money.value - 5;
            nick++;
            coinCount[3].innerHTML = nick + " Coin";
        }
        else {
            money.value = money.value - 1;
            penny++;
            coinCount[4].innerHTML = penny + " Coin";
        }
    }
    money.value = "";
    money.focus();
});
