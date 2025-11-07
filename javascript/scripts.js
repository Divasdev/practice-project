
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
};
