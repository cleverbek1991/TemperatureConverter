const toFahrenheitF = (celcius) => ((celcius * 1.8) + 32);
const toCelciusF = (fahrenheit) => ((fahrenheit - 32)/1.8);

const tempValue = document.getElementById('tempValue');

function toCelcius (temp) {
	const celciusF = toCelciusF(temp);
	document.getElementById('display').innerHTML = "the Temperature is " + Math.round(celciusF) + " degrees Celcius!";
	if (celciusF > 32) {
		document.getElementById('display').style.color = 'red';
		} else if (celciusF < 0) {
			document.getElementById('display').style.color = 'blue';
			} else {
				document.getElementById('display').style.color = 'green';
			}
		}

function toFahrenheit (temp) {
	const fahrenheitF = toFahrenheitF(temp);
	document.getElementById('display').innerHTML = "the Temperature is " + Math.round(fahrenheitF) + " gegrees Fahrenheit!";
	if (fahrenheitF > 90) {
		document.getElementById('display').style.color = 'red';
		} else if (fahrenheitF < 32) {
			document.getElementById('display').style.color = 'blue';
			} else {
				document.getElementById('display').style.color = 'green';
			}
		}

var button = document.getElementById('converter');

function determineConverter (clickEvent) {
		if (document.getElementById('celcius').checked) {
			toCelcius(tempValue.value);
		} else if (document.getElementById('fahrenheit').checked) {
			toFahrenheit(tempValue.value);
		} else {
			alert('Select one of the selection please!');
		}
}

button.addEventListener('click', determineConverter);

const clearAll = document.getElementById('clear');

function clear () {
	document.getElementById('tempValue').value = "";
	document.getElementById('celcius').checked = false;
	document.getElementById('fahrenheit').checked = false;
	document.getElementById('display').innerHTML = '';
}
clearAll.addEventListener('click', clear);