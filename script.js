// Assignment Code
var generateBtn = document.querySelector("#generate");


//My answer:
function generatePassword() {
var uppercaseletters = ["A", "B", "C"];
var lowercase = ["a", "b", "c"];
var numeric = ["1", "2", "3"];
var special = ["!", "@", "#"];

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
console.log(choices);

var password="";
var randomNumber=getrandomNumber(128); //Number between 8 and 128
var randomcharacter=choices[randomNumber];
password=randomcharacter//+password
return password
}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//My answer:

/*A function randomNumber(8,128) that gives you a random number between 8 and 128.
*/

console.log(Math.floor(Math.random() * 129))

function getrandomNumber(max) {
  return Math.floor(Math.random() * (max+1))
}




//Do I have to input if, else if statements?







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//My Answer:
/*
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

// window.alert("Your password is "+userInput);