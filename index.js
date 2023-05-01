"use strict"; 

console.log("the index.js has begun executing")

window.onload = init; 

console.log("inside of the init function"); 
convertbtn.onclick = onCovertbtnClicked; 



//function convertFtoC () {
function onCovertbtnClicked (){
const Fahrenheit = parseFloat(document.getElementById)("fahrenheitField").value;
const Celcius = (Fahrenheit -32)* 5/9; 
document.getElementById("celciusField").textContent = celcius.toFixed(2) + " °C"
}

function convertCtoF() {
    const Celsius = document.getElementById("celsiusField").value;
    const Fahrenheit = (Celsius * 9 / 5) + 32;
    document.getElementById("fahrenheitField").textContent = fahrenheit.toFixed(2) + " °F";
  }