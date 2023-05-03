// Assignment code here

// I need to generate a secure password with parameters that prompt the user to select their preferences. Once the parameters are selected a password with these parameters is generated. Password must be at least 8 characters long and no more then 128 characters. Other parameters include lowercase, uppercase, numeric, and/or special characters. Password must be displayed in an alert or in the provided text box. 

// First i need to create an array for each variable that will be used in the password generation process. 

function generatePassword() {
  var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
  var numbers = ['1','2','3','4','5','6','7','8','9','0'];
  var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','?','/','.',',','<','>','+',"="];
  var allPossibilities = [];

//begin with the prompt for the first portion of the password selection giving the user an option of the number of the characters between 8-128.

let numberOfCharacters = prompt("Please choose your desired number of characters for your password. Please make sure the selection is between 8-128 characters.");

// an if statement needs to be created for the selection process to give the function meaning and logic if the user inputs between 8-128 characters prompt will state the alert, if the user inputs a number less then 8 and greater then 128 characters, the prompt will tell the reader to input the correct number of characters

if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  prompt ("Please choose make sure to choose between 8-128 characters.");
} // prompt is relavent if the user enters a value that is not a numerical value
else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Choose a valid number within the given parameters.");
} 
else {
  alert("This password will contain " + numberOfCharacters + " characters.");

}

// Give the user an option to choose lowercase, uppercase, numbers, and/or special characters. 

//Uppercase prompt
//making prompts more interactive

 let hasUppercaseLetters = prompt("Would you like Uppercase letters? Yes or No?");
  if (hasUppercaseLetters === "yes" || hasUppercaseLetters === "Yes" || hasUppercaseLetters === "YES") {
    confirm ("Your password will include uppercase letters.");
} else {
    confirm ("Your password will not include uppercase letters.");
}

//lowercase prompt
// making the prompts more interactive to the user

let hasLowercaseLetters  = prompt("Would you like lowercase letters? Yes or No?");
if (hasLowercaseLetters === "yes" || hasLowercaseLetters === "Yes" || hasLowercaseLetters === "YES") {
  confirm ("Your password will include lowercase letters.");
} else {
  confirm ("Your password will not include lowercase letters.");
}

//Numbers prompt
// making the prompts more interactive

let hasNumbers = prompt("Would you like numbers in your password? Yes or No?");
if (hasNumbers === "yes" || hasNumbers === "Yes" || hasNumbers === "YES") {
  confirm ("Your password will include numbers.");
} else {
  confirm ("Your password will not include numbers.");
}
//special characters prompt
// making the prompt more interactive

let hasSpecialCharacters = prompt("Would you like special characters included? Yes or No?");
if (hasSpecialCharacters === "yes" || hasSpecialCharacters === "Yes" || hasSpecialCharacters === "YES") {
  confirm ("This password will include special characters.");
} else {
  confirm ("This password will not include special characters.");
}

// if all prompts are declined, the prompt needs to return a message displaying that one of the prompts needs to be choosen so a password can be generated properly.
// fixed the function to return a null value if all prompts are answered as false.

if (hasUppercaseLetters === ("no","No","NO") && hasLowercaseLetters === ("no","No","NO") && hasNumbers === ("no","No","NO") && hasSpecialCharacters === ("no","No","NO")) {
  alert ("Please return, click the 'Generate Password' button and try again.");
  return null;
}

// now that all of the prompts have been given alerts and given choices for the user, I need to generate possibilities within the selected parameters of the choices to begin the random generation of the password. 

//combining possibilities and uppercase letters array
if (hasUppercaseLetters) {
allPossibilities = allPossibilities.concat(uppercaseCharacters);
}
//combining possibilities and lowercase letter array
if (hasLowercaseLetters) {
allPossibilities = allPossibilities.concat(lowercaseCharacters);
}
//combining possibilities and numbers array
if (hasNumbers) {
allPossibilities = allPossibilities.concat(numbers);
}
//combining possibilities with special characters array
if (hasSpecialCharacters) {
allPossibilities = allPossibilities.concat(specialCharacters);
}

// now i need a function to randomize the prompts given and finally generate a password. 

let givenPassword = ""
for (let i =0; i < numberOfCharacters; i++) {
  let randomNumber =[Math.floor(Math.random() * allPossibilities.length)];
  //allows the password to be combined using the random number generator of all possibilities of each array combined with the user input parameters. 
  givenPassword = givenPassword + allPossibilities[randomNumber];
}
 return givenPassword;
};

//Starter Code

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
