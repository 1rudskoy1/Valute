const rates = {};
const elUSD = document.querySelector("[data-value = 'USD']");
const elEUR = document.querySelector("[data-value = 'EUR']");
const elGBP = document.querySelector("[data-value = 'GBP']");

const input = document.querySelector("#input");
const result = document.querySelector("#result");
const select = document.querySelector("#select");

getCurrencies();

async function getCurrencies(){
	
	const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
	const data = await response.json();
	const result =	await data;
 	
 	rates.USD = result.Valute.USD;
 	
 	rates.EUR = result.Valute.EUR;
 	
 	rates.GBP = result.Valute.GBP;



 	elUSD.innerHTML = rates.USD.Value.toFixed(2);
 	elEUR.innerHTML = rates.EUR.Value.toFixed(2);
 	elGBP.innerHTML = rates.GBP.Value.toFixed(2);
	
	if (rates.USD.Value > rates.USD.Previous ) {
		elUSD.classList.add("top");
	} else{
		elUSD.classList.add("bottom");

	}
	if (rates.EUR.Value > rates.EUR.Previous ) {
		elEUR.classList.add("top");
	} else{
		elEUR.classList.add("bottom");

	}
	if (rates.GBP.Value > rates.GBP.Previous ) {
		elGBP.classList.add("top");
	} else{
		elGBP.classList.add("bottom");

	}
}

input.oninput = converValue;

select.oninput = converValue;

function converValue(){
	result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);

}
