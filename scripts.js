const USD = 5.86;
const EUR = 6.64;
const GBP = 7.71;

const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");


amount.addEventListener("input", (e) => {
    const hasCarachtersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCarachtersRegex, "");
});

form.onsubmit = (e) => {
    e.preventDefault();
    console.log(currency.value);

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;

        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;    

        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
};

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

function convertCurrency(amount, price, symbol) {
    try {
        const convertedValue = (amount * price);
        if(isNaN(convertedValue)) {
            return alert("Digite o valor corretamente para a conversao");
        }
        footer.classList.add("show-result");
        description.textContent = `${symbol} 1 = R$ ${USD}`;
        result.textContent = `${formatCurrencyBRL(convertedValue).replace("R$", "")} Reais`;

    } catch (error) {
        console.error("Error in conversion:", error);
        alert("Nao foi possivel converter, tente novamente mais tarde.")
        footer.classList.remove("show-result");
        
    }
}