// Assignment code here

// I need to generate a secure password with parameters that prompt the user to select their preferences. Once the parameters are selected a password with these parameters is generated. Password must be at least 8 characters long and no more then 128 characters. Other parameters include lowercase, uppercase, numeric, and/or special characters. Password must be displayed in an alert or in the provided text box. 

function generatePassword() {
  var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
  var numbers = ['1','2','3','4','5','6','7','8','9','0'];
  var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','?','/','.',',','<','>','+',"="];
  var allPossibilities = [];
}


//begin with the prompt for the first portion of the password selection giving the user an option of the number of the characters between 8-128.

numberOfCharacters = prompt("Please choose your desired number of characters for your password. Please make sure the selection is between 8-128 characters.");

// an if statement needs to be created for the selection process to give the function meaning and logic if the user inputs between 8-128 characters prompt will state the alert, if the user inputs a number less then 8 and greater then 128 characters, the prompt will tell the reader to input the correct number of characters

if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  prompt ("Please choose make sure to choose between 8-128 characters.");
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Please choose a valid number from the given characters.");
} else {
  alert("This password will contain " + numberOfCharacters + " characters.")
}

// Give the user an option to choose lowercase, uppercase, numbers, and/or special characters. 

//Uppercase prompt
hasUppercaseLetters = confirm("Would you like Uppercase letters?");
if (hasUppercaseLetters) {
  alert ("Your password will include uppercase letters.");
} else {
  alert ("Your password will not include uppercase letters.");
}
//lowercase prompt
hasLowercaseLetters  = confirm("Would you like lowercase letters?");
if (hasLowercaseLetters) {
  alert ("Your password will include lowercase letters.");
} else {
  alert ("Your password will not include lowercase letters.");
}
//Numbers prompt
hasNumbers = confirm("Would you like numbers in your password?");
if (hasNumbers) {
  alert ("Your password will include numbers.");
} else {
  alert ("Your password will not include numbers.");
}
//special characters prompt
hasSpecialCharacters = confirm("Would you like special characters included?");
if (hasSpecialCharacters) {
  alert ("This password will include special characters.");
} else {
  alert ("This password will not include special characters.");
}
// if all prompts are declined, the prompt needs to return a message displaying that one of the prompts needs to be choosen so a password can be generated.
if (hasUppercaseLetters === false && hasLowercaseLetters === false && hasNumbers === false && hasSpecialCharacters === false) {
  alert ("Please refresh and choose one of the following prompts to be included in the password.");
}

// now that all of the prompts have been given alerts and given choices for the user, I need to generate possibilities within the slected parameters of the choices to begin the random generation of the password. 

if (hasUppercaseLetters) {

}
if (hasLowercaseLetters) {

}
if (hasNumbers) {

}
if (hasSpecialCharacters) {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
