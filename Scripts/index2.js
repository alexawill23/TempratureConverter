"use strict"; 

console.log("the index.js has begun executing")

window.onload = init; 

console.log("inside of the init function"); 
convertbtn.onclick = onCovertbtnClicked; 


function convertCtoF() {
    const Celsius = document.getElementById("celsiusField").value;
    const Fahrenheit = (Celsius * 9 / 5) + 32;
    document.getElementById("fahrenheitField")= fahrenheit.toFixed(2) + " °F";
  }