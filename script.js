// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//Function
function generatePassword() {
//Variables
var uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

var special = ["!", "@", "#", "$", "%", "^", "&", "*"];

var userInput=window.prompt("Choose a password length of at least 8 characters and no more than 128 characters");
console.log(userInput);
  
var upperchoice=window.confirm("Do you want uppercase letters?")
console.log(upperchoice);

var lowerchoice=window.confirm("Do you want lowercase letters?")
console.log(lowerchoice);

var numericchoice=window.confirm("Do you want numeric characters?")
console.log(numericchoice);

var specialchoice=window.confirm("Do you want special characters?")
console.log(specialchoice);


var choices=[];
if (upperchoice) {
  choices= uppercaseletters.concat(choices);
}
if (lowerchoice) {
  choices= lowercase.concat(choices);
}
if (numericchoice) {
  choices= numeric.concat(choices);
}
if (specialchoice) {
  choices= special.concat(choices);
}
if(upperchoice === false && lowerchoice === false && numericchoice === false && specialchoice === false) {
  window.alert("You need to select at least one character type")
  return null
}

console.log(choices);


//For loop
var password="";
for(var i=0;i<userInput;i++) {
  console.log(choices[i]);
  var randomNumber=getrandomNumber(choices.length); 
  var randomcharacter=choices[randomNumber];
  password=randomcharacter+password
}

return password


}


console.log(Math.floor(Math.random() * 129))

function getrandomNumber(max) {
  return Math.floor(Math.random() * (max+1))
}


