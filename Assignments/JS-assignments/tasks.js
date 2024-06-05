
//Function Decleration
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        AvgAge= sum/arr.length;
    }

    return AvgAge;
}

//Array declaration
let Ages = [38,25,43,28,33,24,29,49];
//Function calling 
console.log(calcAverage(Ages));

//Array sorting
const fruits = ["Pruthvi", "Sai Kiran", "Kushal", "Vishal", "anil"];
console.log(fruits.sort());
console.log(fruits.reverse());


//Math function
let x = Math.random() * 10;
console.log(x);

//Customized greeting

let name = prompt("Hello! What's your name?");
alert(`Nice to meet you, ${name}!`);



function displayGreeting() {
    let name = prompt("Enter your name:");
    let time = parseFloat(prompt("Enter your current time (in hours):"));
    let greeting;
    
    if (time >= 0 && time < 12) {
        greeting = "Good Morning";
    } else if (time >= 12 && time < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    // Displaying the customized greeting
    document.write("<p>Hello, " + name + "! " + greeting + "!</p>");
}

//Calling the  
window.onload = displayGreeting;