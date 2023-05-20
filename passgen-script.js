// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


let upCap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowLett = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '?', '<', '>', '/', ',', '.'];
// let numCheck = prompt('How many characters do you want in your password?', 'Enter 8 - 128');

function generateChoices(){
   // adding parseInt method around the prompt will prevent weirdness from happening if user enters a number with decimal (non integer)
   let lengthCheck = parseInt(prompt('How many characters do you want in your password?', 'Enter 8 - 128'));
  //  lengthCheck;
   if(lengthCheck >= 8 && lengthCheck < 129){
     let allCap = confirm('Do you want to have capitalized letters in your password?');
     allCap;
   } else if(lengthCheck == null){
     alert('Cannot be left blank!');
     return generatePassword();
   } else {
     alert('A number between 8 and 128 must be selected to continue.')
     console.log('is this working?');
   };
   
   // after selecting OK the user will be prompted several more times with these if statements.
   if(allCap === true){
     let allLow = confirm('Do you want to have lowercase letters in your password?', 'Press OK');
     allLow;
     console.log('what next?');
   } else if(allCap === null){
     alert('Cannot be left blank!');
     return allCap;
   } else {
     alert('It"s highly suggested to have a CAPTILIZED letter to better secure the password.');
     return generatePassword();
   };
 
   if(allLow){
     let specCheck = confirm('Do you want to have special characters in your password?', 'Press OK');
     specCheck;
   } else if(allLow === null){
     alert('Cannot be left blank!');
     return allLow;
   } else {
     alert('It"s highly suggested to have a lowercase letter to better secure the password.');
     return generatePassword();
   };
 
   if(specCheck){
     let numCheck = confirm('Do you want to have numbers in your password?', 'Press OK');
     numCheck;
   } else if (numCheck === null){
     alert('Cannot be left blank?');
     return numCheck;
   } else {
     alert('It"s highly suggested to have a lowercase letter to better secure the password.');
     return generatePassword();
   }

  //  object containing the confirmation decison by the user
   let passChoices = {
    passLength: lengthCheck,
    passUp: allCap,
    passLow: allLow,
    passNum: numCheck,
    passSpec: specCheck
   }

   if(numCheck){
    return passChoices;
   } else if (numCheck === null){
    alert('Cannot be left blank?');
    return numCheck;
  } else {
    alert('It"s highly suggested to have a number to better secure the password.');
    return generatePassword();
  }

}

function generatePassword(){
  // when the button is pressed the user is prompted with their first question
 let userConfirmation = generateChoices();
 let userConfirmed = '';
 let pass = '';

 if(userConfirmation.passUp){
  userConfirmed += upCap.join('');
 }

 if(userConfirmation.passLow){
  userConfirmed += lowLett.join('');
 }

 if(userConfirmation.passSpec){
  userConfirmed += specChar.join('');
 }

 if(userConfirmation.passNum){
  userConfirmed += numChar.join('');
 }

 for(howLong = 0; howLong < userConfirmation.passLength; howLong++){
  let atRandom = Math.floor(Math.random() * userConfirmed.length);
  pass += userConfirmed.charAt(atRandom);
 }

 return pass;

}


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
