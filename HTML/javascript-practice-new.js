// // const titleElement = document.getElementById("title");
// // console.log(titleElement);
// // console.log(titleElement.textContent);


// // const button=document.getElementById('changetextbtn');
// // button.addEventListener("click", ()=>{
// //     titleElement.textContent = "Welcome to Earth!"
// // });
// ////////// Changing of Text
// // // Accessing an Element by its ID
// // const titleElement = document.getElementById("title");
// // console.log(titleElement);
// // console.log(titleElement.textContent);

// // // Accessing elements by className
// // const descriptionElements = document.getElementsByClassName("description");
// //  console.log(descriptionElements);
// //  console.log(descriptionElements.textContent);


// // // Adding an Event Listener to a Button
// // const button = document.getElementById("changeTextBtn");
// // button.addEventListener("click", () => {
// //     titleElement.innerHTML = `Hello, <span>Para</span>`;
// // });

// ////////// Creating and Inserting the New Elements
// // Accessing
// // const itemList = document.getElementById("itemList");
// //  const addItemBtn = document.getElementById("addItemBtn");
// //  let i = 4;
// //      addItemBtn.addEventListener("click", () => {
// //          // Creating a New List Item
// //          const newItem = document.createElement("li");
// //          newItem.textContent = `Item ${i++}`;
    
// // //         // Appending the New Item to the Existing List Item
// //          itemList.appendChild(newItem);  
// //      });


// ////////// Modify Styles



// ////////// Creating and Inserting the New Elements
// // Accessing
// // const itemList = document.getElementById("itemList");
// // const removeItemBtn = document.getElementById("removeItemBtn");
// // removeItemBtn.addEventListener("click", () => {
// //     // Removing the Item from the List
// //     if (itemList.lastChild) {
// //         itemList.removeChild(itemList.lastChild);
// //     }
// // });

// ////////// Creating and Inserting the New Elements
// // const items = document.getElementById("itemList");

// // // Accessing the Child Nodes
// // const lists = items.children;
// // for (let i = 0; i < lists.length; i++) {
// //     console.log(lists[i].textContent);
// // }

// // //Accessing the Parent Node
// // const firstList = items.firstElementChild;
// // console.log(firstList.parentNode.id);

// // // Accessing Sibbling Nodes
// // const secondList = firstList.nextElementSibling;
// // console.log(secondList.textContent);

// // const thirdList = secondList.nextElementSibling;
// // console.log(thirdList.textContent);


// ////////// Handling Events with Forms `onfocus` and `onblur`
// // function handleFocus(event) {
// //     event.target.style.backgroundColor = 'lightyellow';
// // }

// // function handleBlur(event) {
// //     event.target.style.backgroundColor = '';
// // }


// //////////  `onclick` with Radio Button
// // function handleRadioClick(event) {
// //     console.log(`selected value: ${event.target.value}`)
// // }


// //////////  `onclick` with Checkboxes
// // function handleCheckboxClick(event) {
// //     if (event.target.checked) {
// //         console.log(`checked: ${event.target.value}`);
// //     } else {
// //         console.log(`un-checked: ${event.target.value}`);
// //     }
// // }


// //////////  `onchange` with select dropdown
// // function handleSelectChange(event) {
// //     console.log(`the selected option: ${event.target.value}`);
// // }

// //////////  `onselect` with textarea
// // function handleSelect(event) {
// //     console.log(`the selected text: ${window.getSelection().toString()}`);
// // }


// // function handleRadio(event){
// //    console.log("selected value:",event.target.value);
// // }

// // ////onchange of color in dropdown
// // function handleSelectchange(event){
// //     console.log(`the selected opton: ${event.target.value}`);
// // }

// //04 June 2024///////////////


// // //2nd function 
// // const replacement = function(str){
// //     return str.replace('Raj','pruthvi');
// // }
// // //1st Function
// // const transformer = function (str, fn){
// //     console.log(`original string: ${str}`);
// //     console.log(`transformed string: ${fn(str)}`)
// // }
// // //function passing as an argument
// // transformer("Raj is a Brilliant student", replacement);


// //Flight details
// // const Kfisher = {
// //     airline: "kingfisher",
// //     planecode:"KF",
// //     Bookings:[],
     
// //     FlightDetails(flightNum, Passengername, time) {
// //          console.log(`${Passengername} is travelling through ${this.airline} Airlines and his flight "${this.planecode}${flightNum}" is delayed by ${time} Hours `);
// //         this.Bookings.push({flight: `${this.planecode}${flightNum}`, Airline_Name:`${this.airline}`, Passengername});    
// //          }       
// // };
// // Kfisher.FlightDetails(756,"Pruthvi", 4);
// // console.log(Kfisher.Bookings);


// // ///calling function which is inside of the another object for reuasbility. 
// const Ethiad={
//     airline:"Ethiad",
//     planecode: "ETH",
//     passengers:100,

// }

// // const FlightDetails1 =  Kfisher.FlightDetails;
// // FlightDetails1.call(Ethiad,463, "Anil", 6);
// // console.log(Ethiad.Bookings);


// // const Payment = function (trainname, passengerNum){
// //     Price = 2999 * passengerNum;
// //     console.log( `Price for ${passengerNum} passengers is ${Price} for ${trainname} Express`);
// // }

// // Payment("Howrah",2);


// // const container = document.getElementById("container");
// //  firstChild = container.firstElementChild;

// //  console.log(firstChild.parentNode.id);



// // Object.keys(Ethiad).forEach(key => {
// //     console.log(`${key}: ${Ethiad[key]}`);
// // });

// // for (const [key, value] of Object.entries(Ethiad)) {
// //     console.log(` ${key}: ${value}`);
// // }

// for (const Keys in Ethiad) {
//     console.log(`${Keys}: ${Ethiad[Keys]}`);
//   }


//   // const Car = function (make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //     this.speed += 10;
// //     console.log(`${this.make} is going at ${this.speed} km/h`);
// // }

// // Car.prototype.brake = function () {
// //     this.speed -= 5;
// //     console.log(`${this.make} is going at ${this.speed} km/h`);
// // }

// // const EV = function (make, speed, charge) {
// //     Car.call(this, make, speed);
// //     this.charge = charge;
// // }

// // // link the properties
// // EV.prototype = Object.create(Car.prototype);

// // EV.prototype.chargeBattery = function (chargeTo) {
// //     this.charge = chargeTo;
// // }

// // EV.prototype.accelerate = function () {
// //     this.speed += 20;
// //     this.charge--;
// //     console.log(`${this.make} is going at ${this.speed} km/h with a charge ${this.charge}`);
// // }
// // const tesla = new EV("Tesla", 120, 23);
// // // console.log(tesla);
// // tesla.accelerate();
// // tesla.brake();

// class PersonC1{
//     constructor(fullName, birthyear){
//         this.fullName =  fullName;
//         this.birthyear = birthyear;
//     }

//     calcAge(){
//         console.log(2037- this.birthyear);
//     }

//     greet(){
//         console.log(`hey ${this.fullName}`);
//     }

//     get age(){
//         return (2037-this.birthyear);
//     }

//     set fullName(name){
//         this.fullName1 = name;
//     }

//     get fullName(){
//         return (this.fullName1);
//     }
// }

// class StudentC1 extends PersonC1{
//     constructor(fullName, birthyear, course){
//         super(fullName, birthyear);
//         this.course =  course;
//     }

//     introduce(){
//         console.log(`my name is ${this.fullName} and i am studying ${this.course}` );
//     }

//     calcAge(){
//         console.log(`iam ${2037-this.birthyear} years old, but as a student I feel more like ${2037-this.birthyear+10}`);
//     }
// }

// const pruthvi = new StudentC1('pruthvi',1997,'B.TECH');
// //setter method 
// pruthvi.fullName ='Naveen';
// pruthvi.course = 'B.COM' 
// //calling introduce
// // pruthvi.introduce();

// const raju ={
//     firstName:'pruthvi',
//     lastname:'Raj'
// }

// raju.firstName = 'Naveen';

// console.log(raju);
