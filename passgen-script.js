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
const vegeta = [];
// gets the length of each array as a string
let upperCap = upCap;

let lowChar = lowLett;

let numBar = numChar;

let specNum = specChar;


console.log(upperCap.length);

let whatUp = upCap.toString();
console.log(whatUp.length);

let downLow = lowLett.toString();
console.log(downLow);

let digits = numChar.toString();
console.log(digits.length);
let soSpec = specChar.toString();
console.log(soSpec.length);


// combines the arrays that are strings
let comboMax = whatUp + downLow + digits + soSpec;


// prompt functions

function checkLength() {
  const lengthCheck = parseInt(prompt('How many characters do you want in your password?', 'Enter 8 - 128'));
  if (lengthCheck >= 8 && lengthCheck < 129 && lengthCheck !== null) {
    vegeta.push(lengthCheck);
    console.log(vegeta)
    return checkUp();
  } else if (lengthCheck < 8 || lengthCheck > 129) {
    alert('A number between 8 and 128 must be selected to continue.');
    return checkLength();
  } else {
    alert('Cannot be left blank')
    return checkLength();
  };
}

function checkUp() {
  const allCap = confirm('Do you want to have capitalized letters in your password?');
  if (allCap) {
    return checkLow();
  } else {
    alert ('Having capitalized letters in your password will make it more secure!');
    return checkLow();
  }
}

function checkLow() {
  const allLow = confirm('Do you want to have lowercase letters in your password?', 'Press OK');
  if (allLow) {
    return checkNums();
  } else {
    alert ('Having lowercase letters in your password will make it more secure!');
    return checkNums();
  }
}

function checkNums() {
  const numCheck = confirm('Do you want to have numbers in your password?', 'Press OK');
  if (numCheck) {
    return checkSpec();
  } else {
    alert ('Having numbers in your password will make it more secure!');
    return checkSpec();
  }
}

function checkSpec() {
  const specCheck = confirm('Do you want to have special characters in your password?', 'Press OK');
  if (specCheck) {
    return luffy();
  } else {
    alert ('Having special characters in your password will make it more secure!');
    return luffy();
  }
}

// console.log(vegeta[0]);

const luffy = () => {

  let saiyan = vegeta.toString();
  console.log(saiyan);
  let fortKnox = '';
  if (checkUp && checkLow && checkNums && checkSpec) {
    

    fortKnox += whatUp[Math.floor(Math.random() * upperCap)];
    fortKnox += downLow[Math.floor(Math.random() * lowChar)];
    fortKnox += digits[Math.floor(Math.random() * numChar)];
    fortKnox += soSpec[Math.floor(Math.random() * specNum)];

    while (saiyan > fortKnox.length) {
      fortKnox += comboMax[Math.floor(Math.random() * comboMax.length)];
    }
    console.log(fortKnox);
  }
  return;
} ;

// function naruto() {
//   const allCap = confirm('Do you want to have capitalized letters in your password?');
//      allCap;

// }

// function ichigo() {
//   let allLow = confirm('Do you want to have lowercase letters in your password?', 'Press OK');
//   allLow;
// }

// function goku() {
//   if(naruto) {
//     ichigo;
//     alert('making progress!')
//   } else {
//     alert('another progress!')
//   }
// }


// function generateChoices(){
//    // adding parseInt method around the prompt will prevent weirdness from happening if user enters a number with decimal (non integer)
  
//   //  lengthCheck;
//   //  if(Luffy.value >= 8 && Luffy.value < 129 && Luffy.value !== null){
//   //    let allCap = confirm('Do you want to have capitalized letters in your password?');
//   //    allCap;
//   //  } else if(lengthCheck === null){
//   //    alert('Cannot be left blank!');
//   //    return generatePassword();
//   //  } else {
//   //    alert('A number between 8 and 128 must be selected to continue.')
//   //    console.log('is this working?');
//   //  };
   
//    // after selecting OK the user will be prompted several more times with these if statements.
//    if(allCap === true){
//      let allLow = confirm('Do you want to have lowercase letters in your password?', 'Press OK');
//      allLow;
//      console.log('what next?');
//    } else if(allCap === null){
//      alert('Cannot be left blank!');
//      return allCap;
//    } else {
//      alert('It"s highly suggested to have a CAPTILIZED letter to better secure the password.');
//      return generatePassword();
//    };
 
//    if(allLow){
//      let specCheck = confirm('Do you want to have special characters in your password?', 'Press OK');
//      specCheck;
//    } else if(allLow === null){
//      alert('Cannot be left blank!');
//      return allLow;
//    } else {
//      alert('It"s highly suggested to have a lowercase letter to better secure the password.');
//      return generatePassword();
//    };
 
//    if(specCheck){
//      let numCheck = confirm('Do you want to have numbers in your password?', 'Press OK');
//      numCheck;
//    } else if (numCheck === null){
//      alert('Cannot be left blank?');
//      return numCheck;
//    } else {
//      alert('It"s highly suggested to have a lowercase letter to better secure the password.');
//      return generatePassword();
//    }

//   //  object containing the confirmation decison by the user
//    let passChoices = {
//     passLength: lengthCheck,
//     passUp: allCap,
//     passLow: allLow,
//     passNum: numCheck,
//     passSpec: specCheck
//    }

//    if(numCheck){
//     return passChoices;
//    } else if (numCheck === null){
//     alert('Cannot be left blank?');
//     return numCheck;
//   } else {
//     alert('It"s highly suggested to have a number to better secure the password.');
//     return generatePassword();
//   }

// }

// function generatePassword(){
  
//   // when the button is pressed the user is prompted with their first question
// //  let userConfirmation = generateChoices();
// //  let userConfirmed = '';
// //  let pass = '';

// //  if(userConfirmation.passUp){
// //   userConfirmed += upCap.join('');
// //  }

// //  if(userConfirmation.passLow){
// //   userConfirmed += lowLett.join('');
// //  }

// //  if(userConfirmation.passSpec){
// //   userConfirmed += specChar.join('');
// //  }

// //  if(userConfirmation.passNum){
// //   userConfirmed += numChar.join('');
// //  }

// //  for(howLong = 0; howLong < userConfirmation.passLength; howLong++){
// //   let atRandom = Math.floor(Math.random() * userConfirmed.length);
// //   pass += userConfirmed.charAt(atRandom);
// //  }

// //  return pass;

// }


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  checkLength();
  // luffy();
  var password = luffy();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
