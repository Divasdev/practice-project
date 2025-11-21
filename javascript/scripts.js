
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


/*
DICE  ROLLER GAME
 const inputBox=document.getElementById('user-input');
 const submitBtn=document.getElementById('submit-btn');
 const userMove=document.getElementById("user-move");
 const compMove=document.getElementById('computer-move');
 const compDiceimage =document.getElementById("dice-image");


document.getElementById('submit-btn').onclick =
function subBtn(){
    const input = Number(inputBox.value);

    if( isNaN(input)){
     userMove.textContent= "Enter a valid number";
    }
     else if ( input >= 1 && input <=6){
      userMove.textContent = `Your's Move: ${input}`;
      computerMoves();
    }
    else{
       userMove.textContent = `Enter a number between 1 and 6`;
    }


}
function computerMoves(){
   const randomNum = Math.floor(Math.random()* 6 +1);
   console.log(randomNum);
   compMove.textContent = `computer's Move:${randomNum}`;
   compDiceimage.src= `../Dice-Images/Dice-${randomNum}.svg.png`;

}*/
/*
FOR EACH
let number = [1,2,3,4,5];

number.forEach(display);
number.forEach(double);
function double(element,index,array){
   array[index]=element*3
  
}


function display(element){
    
console.log(element);
}
*/

/*

MAP() METHOD 
const myfav=["apple","goggle",'meta',"nvidia","openAi"];
const fav=myfav.map(companies);
console.log(fav);
function companies(elements){
  return elements.toUpperCase();
};
fav.forEach(display);
function display (elements){
   console.log(elements);
}
*/
/*
FILTER() METHOD
let number=[1,2,3,4,5,6,7,8,9];
let even =number.filter(evenNum);
function evenNum(elements){
   return elements % 2 ===0 ;
}
console.log(even);
*/

/*
REDUCE()METHOD 
const prices=[100,200,300,400,500];
const total= prices.reduce(sum);
console.log(total);
function sum(accumulator,element){
   return accumulator+element;
}
   */
/*
ARROW FUNCTIONS 
const arrow = ((name,lastName )=>{
console.log(`${name}`);
console.log(lastName);
});

arrow("divas");
arrow("sharma")
*/
/*
JAVASCRIPTS OBJECTS
const divasInfo={
   firstName:"Divas",
   age: "20",
   lastName:"sharma",
   address:"kanglatongbi",
   course:"IITM BS Data Science"
}
 console.log(divasInfo.firstName);
console.log(divasInfo.lastName);
*/

/*
THIS KEYWORD IN JAVASCRIPT
const divasInfo={
   firstName:"Divas",
   age: "20",
   lastName:"sharma",
   address:"kanglatongbi",
   course:"IITM BS Data Science",
   foodName:"paneer",
   favFood: function(){console.log( `${this.firstName} fav food is ${this.foodName}`)}
};

divasInfo.favFood();
*/

/*CONSTRUCTOR FUNCTION IN JAVASCRIPT
function Car(name,model,color){
   this.name= name,
   this.model =model,
   this.color=color
   this.drive=function(){console.log(`you drive ${this.name}`)}

}

const Car1=new Car("porshe","911 GT3","black");
const Car2=new Car("BMW","M4","black");
console.log(Car1);
console.log(Car2);
Car1.drive();
Car2.drive();
*/

/*

CLASSES JAVASCRIPT

class Products{
   constructor(name,price){
      this.name =name;
      this.price=price;   
   
   }

   displayProduct(){
      console.log(`product:${this.name}`);
      console.log(`price:₹${this.price}`);
   }
   calcTotal(salesTax){
      return this.price+(this.price * salesTax);
   }
}

const salesTax=0.067;
const prod1=new Products("shirt",163);
const prod2=new Products("pant",450);
const total1 = prod1.calcTotal(salesTax);
const total2 = prod2.calcTotal(salesTax);



prod1.displayProduct();
console.log(`The sales tax is:₹${total1} `);
prod2.displayProduct();
console.log(`The sales tax is:₹${total2} `);

*/

/*
STATIC KEYWORD

class Mathutil{
   static PI =3.25284;
  static getDiameter(radius){
       return radius*2;
  }
  static getArea(radius){
   return Mathutil.PI * radius ** 2;
  }
  sayHello(){
   console.log(`Hello,${this.userName}`);
  }

}
console.log(Mathutil.getDiameter(80));
console.log(Mathutil.getArea(10000000));










class userInfo{
   static userCount=0;
   constructor(userName){
      this.userName=userName;
      userInfo.userCount++;
   }
   static getUsercount(){
      console.log(`usersonline:${userInfo.userCount}`);
   }
     sayHello(){
   console.log(`Hello,${this.userName}`);
  }

}

const user1 = new userInfo("Divas Sharma");
user1.sayHello();

console.log(user1.userName);
userInfo.getUsercount();*/

/*

INHERITANCE IN JAVASCRIPT
// parent property
class wildAnimal {
   tiger(){
      console.log(` The jungle has ${this.name}`)
   }
   elephant(){
      console.log(`The jungle has ${this.name}`);

   }
}

// child property

class tiger extends wildAnimal{
   name="Bengal tiger";
   eat(){
      console.log(`The ${this.name} is eating.`);
   }
}

const Tiger =new tiger();

console.log(Tiger);
Tiger.eat();*/

/*
SUPER KEYWORD IN JAVASCRIPT 
class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);   // the knock → lets you access 'this'
    this.age = age;
  }

  show() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

const kid = new Child("Divas", 19);
kid.greet();
kid.show();
*/


/*
GETTERS AND SETTERS IN JAVASCRIPT 

class Rectangle{
   constructor(width,height) {
      this.width=width;
      this.height=height;
   }
   areaRect(){
      return this.width*this.height;
   }
   set width(newWidth){
       if (newWidth>0){
           this._width =newWidth;
       }
       else{
         console.error("Width must be number");
       }
   }
   set height(newHeight){
       if (newHeight>0){
           this._height =newHeight;
       }
       else{
         console.error("Height  must be  positive number");
       }
   }

   get width (){
      return this._width;
   }
   get height (){
      return this._height;
   }


   get periRect(){
      return 2*(this._height*this._width);
   }
}
const rectangle = new Rectangle(35,45);


console.log(rectangle.areaRect());
console.log(rectangle.periRect);




class person {
   constructor(firstName,lastName){
      this.firstName=firstName;
      this.lastName=lastName;
   }
   set firstName(newFirstname){
      if(typeof newFirstname ==='string'){
         this._firstName= newFirstname;
      }
      else{
         console.error("Name should be a string");
      }

   }

    set lastName(newLastname){
      if(typeof newLastname ==='string'){
         this._lastName= newLastname;
      }
      else{
         console.error("Name should be a string");
      }
   }
   get firstName(){
      return this._firstName;
   }
   get lastName(){
      return this._lastName;
   }
   
}
 const Person = new person("Divas","Sharma");

console.log(Person.firstName);
console.log(Person.lastName);


*/


/*

DESTRUCTURING IN JAVASCRIPT
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);





const fruits = ['apple', 'banana', 'orange','kiwi'];
[fruits[0], fruits[2]] = [fruits[2], fruits[0]];
console.log(fruits);







//-------------------------------------
const [firstFruit, middleFruit, lastFruit ,...extraFruits] = fruits;
console.log(firstFruit);
console.log(middleFruit);
console.log(lastFruit);
console.log(extraFruits);




function displayPerson({ firstName,lastName,age,job }){

   console.log(`name: ${firstName}`);
   console.log(`age ${lastName}`);
}
const person1={
     firstName:"Divas",
     lastName:"Sharma",
     age:20,
     job:"AI engineer"
};
const person2={
     firstName:"Patrick",
     lastName:"Trump",
     age:30
};
const {firstName,lastName,age,job ="Data Scientist"} =person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);



displayPerson(person1);


*/


/*
NESTED OBJECTS IN JAVASCCRIPT


const myInfo={
    name : 'Divas Sharma',
    age : 20,
    address:{
      lane:34,
      street:"Mandir",
      District:"Imphal west"
    }
}

console.log(myInfo.address.lane);
console.log(myInfo.address);


for (const property in myInfo.address){
   console.log(myInfo.address[property]);
}





class Person{
     constructor( name,age,job,...address){
      this.name=name;
      this.age=age;
      this.address= new Address(...address);
     }


}


class Address{
   constructor( street, city, state){
      this.street=street;
      this.city=city;
      this.state=state;
   }
}



const p1= new Person('a',30,"data scientist","mandir",
                                            "imphal",
                                            "India"
);

const p2= new Person('b',40," scientist","mandir",
                                            "imphal",
                                            "India"
);

const p3= new Person('c',50,"data engineer","mandir",
                                            "imphal",
                                            "India"
);


console.log(p1.address.state);
console.log(p2);
console.log(p3);


*/


/*
// Array of objects with nested objects
const students = [
  {
    name: "Divas",
    age: 20,
    scores: { math: 88, physics: 92 }
  },
  {
    name: "Asha",
    age: 19,
    scores: { math: 75, physics: 81 }
  }
];

// 1. push() → add a new student
students.push({
  name: "Rohan",
  age: 21,
  scores: { math: 93, physics: 89 }
});

// 2. pop() → remove last object
const removedStudent = students.pop();

// 3. splice() → insert object at index 1
students.splice(1, 0, {
  name: "Meera",
  age: 22,
  scores: { math: 67, physics: 78 }
});

// 4. forEach() → print all names
students.forEach(s => {
  console.log(`Name: ${s.name}, Math: ${s.scores.math}`);
});

// 5. map() → make an array of physics scores only
const physicsScores = students.map(s => s.scores.physics);
console.log("Physics scores:", physicsScores);

// 6. filter() → students with math score > 80
const highMath = students.filter(s => s.scores.math > 80);
console.log("High math students:", highMath);

// 7. reduce() → total math score of all students
const totalMath = students.reduce((sum, s) => sum + s.scores.math, 0);
console.log("Total math score:", totalMath);

*/

/*
SORT METHOD IN JAVASCRIPT 


const fruits = [
  { name: "Apple", color: "Red", price: 120 },
  { name: "Banana", color: "Yellow", price: 40 },
  { name: "Orange", color: "Orange", price: 90 },
  { name: "Kiwi", color: "Green", price: 150 }
];

fruits.sort((a,b) => b.name.localeCompare (a.name));
console.log(fruits);


const num=[1,2,5,4,8,0]



num.sort((a,b) => b-a);
//console.log(num);


*/

/*
SUFFLE AN ARRAY IN JAVASCRIPT
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(shuffle(arr));

*/

// CLOSURE IN JAVASCRIPT//
/*
function outer(){


   let message ="hello";


   function inner(){
      console.log(message);
   }
   inner();
   message="Divas";
}

outer();



function outer() {
  let counter = 0;  // variable lives in outer's scope

  function inner() {
    counter++;            // still accessible
    console.log(counter); // inner "remembers" counter
  }

  return inner; // return the function itself
}

const fun = outer();  // outer is done executing...
fun();  // 1
fun();  // 2
fun();  // 3

function create Game
 let score =0;

 function increaseScore(points){
   score+=points;
   console.log(points);
 }
 function decreaseScore(points){
   score -=points;
   console.log(points)
 }
function getScore(){
   return score;
}

increaseScore(5);
decreaseScore(6);


console.log(`final score is ${getScore} `);

*/
/*

let timeoutId;
function startTimer(){
  timeoutId= setTimeout(()=>{
      alert('hello')
   },3000);
}


function endTimer(){
   clearTimeout(timeoutId);
   console.log('clear');
}

*/

/*
function updateClock() {
   const now = new Date();
   let hours = now.getHours();
   const meridian = hours >= 12 ? "PM" : 'AM';
   hours = hours % 12 || 12;
   hours = hours.toString().padStart(2, 0);

   const mins = now.getMinutes().toString().padStart(2, 0);
   const secs = now.getSeconds().toString().padStart(2, 0);

   const timeString = `${hours}:${mins}:${secs}`;
   document.getElementById("clock").textContent = timeString;
}


updateClock();
setInterval(updateClock, 1000);

*/

/*
const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;

function start() {
  if (!isrunning) {
    starttime = Date.now() - elapsedtime;
    timer = setInterval(update, 10); // 10 ms = 0.01s
    isrunning = true;
  }
  console.log(starttime);
}

function update() {
  const currenttime = Date.now();
  elapsedtime = currenttime - starttime;

  let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedtime / (1000 * 60)) % 60;
  let seconds = Math.floor(elapsedtime / 1000) % 60;
  let miliseconds = Math.floor((elapsedtime % 1000) / 10);

  // optional: zero padding
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  miliseconds = miliseconds.toString().padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

// optional: stop & reset bhi bana sakte ho
function stop() {
  if (isrunning) {
    clearInterval(timer);
    isrunning = false;
  }
}

function reset() {
  clearInterval(timer);
  isrunning = false;
  elapsedtime = 0;
  display.textContent = "00:00:00:00";
}
  */



//Dom Navigation
/*
const new1 =document.createElement("h1");

newH1.textContent ="I like pizza";

document.body.appendChild(append(new1));
*/



/*

MOUSE RELATED EVENT IN JAVASCRIPT

const mybox=document.getElementById("log-btn");



mybox.addEventListener("click", 
  (event)=>{
       mybox.style.backgroundColor="orange";
  event.target.textContent="Archita Sharma";
   }
);


mybox.addEventListener("mouseover",event=>{
    mybox.style.backgroundColor="orange";
  event.target.textContent="Archita Sharma";
});

mybox.addEventListener("mouseout" ,event=>{

       mybox.style.backgroundColor="blue";
  event.target.textContent="Archita Sharma my babe";
   }
);

*/




/*
KEY EVENTS IN JAVASCRIPTS

const mybox = document.getElementById("log-btn");
const moveAmount = 10;

let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
  if (event.key.startsWith("Arrow")) {

   event.preventDefault();
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    mybox.style.top  = `${y}px`;
    mybox.style.left = `${x}px`;
  }
});



document.addEventListener("keydown",event=>{
   mybox.textContent="Apple";
   mybox.style.backgroundColor="tomato";
});


document.addEventListener("keyup",event=>{
mybox.textContent="Google";
mybox.backgroundColor="lightblue";

});


*/

/*
HIDE OR SHOW IMAGE IN HTML USING JAVASCRIPT
const myButton=document.getElementById("mybutton");
const myImg=document.getElementById("click");




myButton.addEventListener("click",event=>{
   myImg.style.display ="none";
    myImg.style.display ="show";

});

*/

/*

CLASSLIST IN JAVASCRIPT
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  const boxId = button.dataset.box;
  const targetBox = document.getElementById(boxId);

  button.addEventListener("mouseover", () => {
    targetBox.classList.add("highlight");
  });

  button.addEventListener("mouseout", () => {
    targetBox.classList.remove("highlight");
  });
});

*/

const slides =document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId =null;

document.addEventListener("DOMContentLoaded",intializeSlider);
function intializeSlider(){

   if (slides.length >0){

slides[slideIndex].classList.add("displaySlide");
  intervalId=setInterval(nextSlide,3000)
}

   }
  

function showSlide(index){

   if (index>= slides.length){
        slideIndex=0;

   }
   else if (index<0){
      slideIndex=slides.length-1;

   }




slides.forEach( slide =>{
   slide.classList.remove("displaySlide");

})
slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
   clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);




}
function nextSlide(){
   slideIndex++;
   showSlide(slideIndex);
}






