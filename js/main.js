// ask name user
var inputUser = prompt("Write your name here!");
console.log(inputUser);

// set up gretting string
var gretting = "Hi" + inputUser;

// ask surname user
var surname = prompt("Write your surname here!");
console.log(surname)

// ask favourite color
var color = prompt("What's your favourite color?");
console.log(color)

// set up final output string
var outputFin =  "Password:" + inputUser + surname + color + "19";
console.log(outputFin)

document.getElementById('password').innerHTML=outputFin;
