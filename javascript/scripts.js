
/*let fullName= 'Divas Sharma';
let favoriteCar="Porsche";

document.getElementById("paragraph1").textContent= `Your Name is :${fullName}`;
document.getElementById("paragraph2").textContent= `Your favorite car is :${favoriteCar}`;


let userName;
 userName=prompt("what is your username??")
console.log(userName);

document.getElementById("my-button").onclick= 
function(){
   username=document.getElementById('textbox').value;
   document.getElementById("header").textContent=`Hello:${username}`
   console.log(username);
} ;*/

/*const decreaseBtn=document.getElementById("btn-dec");
const resetBtn=document.getElementById("btn-reset");
const increaseBtn=document.getElementById("btn-inc");
const  counterNum=document.getElementById("counter");
let count=0;

increaseBtn.onclick =function(){
   count++;
   counterNum.textContent=count;
}

decreaseBtn.onclick=function(){
   count--
   counterNum.textContent= count;
}

resetBtn.onclick=function(){
   count=0
   counterNum.textContent= count;
}*/


 /*

 CHECKED PROPERTY IN JAVASCRIPT
const subsCheckbox=document.getElementById("subs-checkbox");
const VisaCheckbox=document.getElementById("Visa-checkbox");
const rupayCheckbox=document.getElementById("rupay-checkbox");
const masterCheckbox=document.getElementById("master-checkbox");
const submitButton=document.getElementById("submitButton");
const resultPara=document.getElementById("subsResult");
const payResult=document.getElementById("payResult");


submitButton.onclick = function(){

   if (subsCheckbox.checked){
       resultPara.textContent =`You are subscribed `;
   }
   else{
      resultPara.textContent=`You aren't subscribed`;
   }

   if(VisaCheckbox.checked){
      payResult.textContent="you are paying with visa";

   }
   else if(masterCheckbox.checked){
      payResult.textContent="you are paying with mastercard";
   }
   else if(rupayCheckbox.checked){
      payResult.textContent="You are paying with Rupay";
   } else{
      payResult.textContent="You must select a payment type";
   }
};*/

/*
TERNARY OPERATOR
let purchaseAmount= 4000
let marketOffers= purchaseAmount>5000 ?"You are eligble for an extra 20% discount!!" :"You should buy more stuffs to avail the dicount";

alert(marketOffers);
*/

/*
SWICH
let purchasebatteryHealth=100;
let degradedbatteryHealth=80
switch(true){

   case degradedbatteryHealth<=80:
    letter='B';
      break; 
   case purchasebatteryHealth<=100:
   letter='A';
      break;
}

console.log(letter);

*/
   // STRING SLICING

/*const fullName="Divas";
let firstName= fullName.slice(0,2);
let lastName = fullName.slice(3,5);
console.log(firstName)
console.log(lastName);*/



//let fileName= "projects.js";
//let ext=fileName.slice(-2);
//console.log(ext);//

/*let username ="";

while(username=== ""){
   console.log("You didn't enter your name");

}*/
/*

TEMPERATURE CONVERTER
const textBox=document.getElementById("temp-input");
const celtofah=document.getElementById("c-to-f");
const fahtocel=document.getElementById("f-to-c");
const result=document.getElementById("temp-result");

document.getElementById("convert-btn").onclick = tempConvert;


let temp;


function tempConvert(){
    if (celtofah.checked){
      temp = Number(textBox.value);
      temp = (temp*9/5)+32;
      result.textContent =temp.toFixed(2) + '°F';

    } else if (fahtocel.checked){
      temp = Number(textBox.value);
      temp = (temp-32) * 5/9;
      result.textContent = temp.toFixed(1) +'°C';

      
    } else {

   result.textContent ="Select a Unit to convert ";

    }

}*/

 



