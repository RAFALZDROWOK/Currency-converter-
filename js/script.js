formElement = document.querySelector(".js-form");
amountElement = document.querySelector(".js-amount");
currencyElement = document.querySelector(".js-currency");
resultElement = document.querySelector(".js-result")

let rateEUR = 4.44;
let rateUSD = 3.99;
let rateGBP = 5.55;

formElement.addEventListener("submit", (event) => {    /* preventDefault - blokuje domyslne wysłanie formularza */
    event.preventDefault();

    let amount = +amountElement.value;   /* + pojedynczy operator konwertuje tekst na liczbę */
    let currency = currencyElement.value;  /* currency jest to łańcuch znaków */

    let result;   /* zadeklarowałem zmienną result nie przypisałem wartości, wartość przypisze wewnatrz switcha */

    switch (currency) {  /*switch zastosowałem ponieważ jest kilka opcji w zależności od wartości jednego wyrażenia */
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;

});

