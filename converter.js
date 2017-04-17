const toFahrenheitF = (celcius) => ((celcius * 1.8) + 32);
const toCelciusF = (fahrenheit) => ((fahrenheit - 32)/1.8);

const tempValue = document.getElementById('tempValue');

function toCelcius (temp) {
	console.log(temp);
	const celciusF = toCelciusF(temp);
	document.getElementById('display').innerHTML = "the Temperature is " + Math.round(celciusF) + " degrees Celcius";
	if (celciusF > 32) {
		document.getElementById('display').style.color = 'red';
		} else if (celciusF < 0) {
			document.getElementById('display').style.color = 'blue';
			} else {
				document.getElementById('display').style.color = 'green';
			}
		}

function toFahrenheit (temp) {
	console.log(temp);
	const fahrenheitF = toFahrenheitF(temp);
	document.getElementById('display').innerHTML = "the Temperature is " + Math.round(fahrenheitF) + " gegrees Fahrenheit";
	if (fahrenheitF > 90) {
		document.getElementById('display').style.color = 'red';
		} else if (fahrenheitF < 32) {
			document.getElementById('display').style.color = 'blue';
			} else {
				document.getElementById('display').style.color = 'green';
			}
		}

// Get a reference to the button element in the DOM
var button = document.getElementById('converter');

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	if (tempValue.value) {
		console.log("event", clickEvent);
		if (document.getElementById('celcius').checked) {
			console.log(document.getElementById('celcius').checked);
			console.log(tempValue.value);
			toCelcius(tempValue.value);
		} else if (document.getElementById('fahrenheit').checked) {
			console.log(document.getElementById('fahrenheit').checked);
			console.log(tempValue.value);
			toFahrenheit(tempValue.value);
		} else {
			alert('Select one of the selection please!');
		}
	}
}

// Assign a function to be executed when the button is clicked
button.addEventListener('click', determineConverter);

const clearAll = document.getElementById('clear');

function clear () {
	document.getElementById('tempValue').value = "";
	document.getElementById('celcius').checked = false;
	document.getElementById('fahrenheit').checked = false;
	document.getElementById('display').innerHTML = '';
}
clearAll.addEventListener('click', clear);