"use strict"; 

//console.log("the index.js has begun executing");
const fahrenheitField = (document.getElementById)("fahrenheitField");
const outputField = document.getElementById("outputField");
const convertBtn = document.getElementById("convertBtn"); 

window.onload = init; 

function init () {
convertbtn.onclick = onConvertbtnClicked; 

console.log("inside of the init function"); 
}
//function convertFtoC () {




function onConvertbtnClicked (){
//convertCtoF() 
  let fahrenheitNum = parseFloat(fahrenheitNum.value); 
  let userTypedValue = fahrenheitField.value;
  let valueAsNumber = parseFloat("userTypedValue"); 
  let fahrenheit = valueAsNumber * (9 / 5) + 32;
  console.log("valueAsNumber" + fahrenheit); 
    
      
    
    
  outputField.value = fahrenheit;
    
}