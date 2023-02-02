{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.64;
        const rateUSD = 4.29;
        const rateGBP = 5.23;
        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "USD":
                return amount / rateUSD;
            case "GBP":
                return amount / rateGBP;
        }
    };

    const updateResultText = (amount, result, currency) => {
        resultElement = document.querySelector(".js-result")
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        amountElement = document.querySelector(".js-amount");
        currencyElement = document.querySelector(".js-currency");
        const amount = +amountElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(amount, currency);
        updateResultText(amount, result, currency);
    }

    const init = () => {
        formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}

