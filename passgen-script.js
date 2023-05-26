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

// the arrays of the user choices
let upCap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowLett = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '?', '<', '>', '/', '.'];
// an open array for storing the length of the users' passaword
const vegeta = [];
// these variables are now where the arrays are stored
let upperCap = upCap;

let downLow = lowLett;

let numBar = numChar;

let specThis = specChar;



// turns all these arrays to a string

let whatUp = upperCap.toString();

let lowChar = downLow.toString();

let digits = numBar.toString();

let soSpec = specThis.toString();






// prompt functions that will call on one another after a few checks have been made
// that will allow the user to see the password containing their chosen characters

function checkLength() {
  const lengthCheck = parseInt(prompt('How many characters do you want in your password?', 'Enter 8 - 128'));
  if (lengthCheck >= 8 && lengthCheck < 129 && lengthCheck !== null) {
    // this will allow the user to be able to output a different length of password if they so choose
    // every time they press the button
    vegeta.splice(0,1,lengthCheck);
    console.log(vegeta)
    return checkUp();
  } else if (lengthCheck < 8 || lengthCheck > 129) {
    alert('A number between 8 and 128 must be selected to continue.');
    return checkLength();
  } else {
    alert('Cannot be left blank');
    return;
  };
};

function checkUp() {
  const allCap = confirm('Do you want to have capitalized letters in your password?');
  if (allCap) {
    return checkLow();
  } else {
    alert ('Having capitalized letters in your password will make it more secure!');
    return checkLow();
  }
};

function checkLow() {
  const allLow = confirm('Do you want to have lowercase letters in your password?', 'Press OK');
  if (allLow) {
    return checkNums();
  } else {
    alert ('Having lowercase letters in your password will make it more secure!');
    return checkNums();
  }
};

function checkNums() {
  const numCheck = confirm('Do you want to have numbers in your password?', 'Press OK');
  if (numCheck) {
    return checkSpec();
  } else {
    alert ('Having numbers in your password will make it more secure!');
    return checkSpec();
  }
};

function checkSpec() {
  const specCheck = confirm('Do you want to have special characters in your password?', 'Press OK');
  if (specCheck) {
    return luffy();
  } else {
    alert ('Having special characters in your password will make it more secure!');
    return luffy();
  }
};

const luffy = () => {
  // combines all the arrays into one big array

  let comboMax = upperCap.concat(downLow, numChar, specChar);
  // big array turns to string
  let maxCombo = comboMax.toString(); 
  
  console.log(maxCombo);
 
  // let saiyan = vegeta.toString();
  // console.log(saiyan);

  // turns array into an integer
  let saiyan = Number(vegeta);
  console.log(saiyan);
 
  let fortKnox = '';
  
  if (checkUp && checkLow && checkNums && checkSpec) {
    

    fortKnox += whatUp[Math.floor(Math.random() * upperCap.length)];
    fortKnox += lowChar[Math.floor(Math.random() * downLow.length)];
    fortKnox += digits[Math.floor(Math.random() * numBar.length)];
    fortKnox += soSpec[Math.floor(Math.random() * specThis.length)];

    console.log(fortKnox.length);

    while (saiyan > fortKnox.length) {
      fortKnox += maxCombo[Math.floor(Math.random() * comboMax.length)];
    }
    return fortKnox;
  };

  // if (!checkUp && checkLow && checkNums && checkSpec) {
    

  //   // fortKnox += whatUp[Math.floor(Math.random() * upperCap.length)];
  //   fortKnox += lowChar[Math.floor(Math.random() * downLow.length)];
  //   fortKnox += digits[Math.floor(Math.random() * numBar.length)];
  //   fortKnox += soSpec[Math.floor(Math.random() * specThis.length)];


  //   while (saiyan > fortKnox.length) {
  //     fortKnox += maxCombo[Math.floor(Math.random() * comboMax.length)];
  //   }
  //   return fortKnox;
  // }

  // if (checkUp && !checkLow && checkNums && checkSpec) {
    

  //   fortKnox += whatUp[Math.floor(Math.random() * upperCap.length)];
  //   // fortKnox += lowChar[Math.floor(Math.random() * downLow.length)];
  //   fortKnox += digits[Math.floor(Math.random() * numBar.length)];
  //   fortKnox += soSpec[Math.floor(Math.random() * specThis.length)];

  //   while (saiyan > fortKnox.length) {
  //     fortKnox += maxCombo[Math.floor(Math.random() * comboMax.length)];
  //   }
  //   return fortKnox;
  // }

  // if (checkUp && checkLow && !checkNums && checkSpec) {
    

  //   fortKnox += whatUp[Math.floor(Math.random() * upperCap.length)];
  //   fortKnox += lowChar[Math.floor(Math.random() * downLow.length)];
  //   // fortKnox += digits[Math.floor(Math.random() * numBar.length)];
  //   fortKnox += soSpec[Math.floor(Math.random() * specThis.length)];

  //   while (saiyan > fortKnox.length) {
  //     fortKnox += maxCombo[Math.floor(Math.random() * comboMax.length)];
  //   }
  //   return fortKnox;
  // }

  // if (checkUp && checkLow && checkNums && !checkSpec) {
    

  //   fortKnox += whatUp[Math.floor(Math.random() * upperCap.length)];
  //   fortKnox += lowChar[Math.floor(Math.random() * downLow.length)];
  //   fortKnox += digits[Math.floor(Math.random() * numBar.length)];
  //   // fortKnox += soSpec[Math.floor(Math.random() * specThis.length)];

  //   while (saiyan > fortKnox.length) {
  //     fortKnox += maxCombo[Math.floor(Math.random() * comboMax.length)];
  //   }
  //   return fortKnox;
  // }

  // if (!checkUp && !checkLow && !checkNums && !checkSpec) {
    
  //   alert('No password can be generated with the choices you made');
  //   return;
  // }


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

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
