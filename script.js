// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Write password to the #password input
function generatePassword() {
  console.log("Generating my password!");
  var passwordChar = prompt("How many characters do you want in your password?");

  if (passwordChar > 7 && passwordChar < 129 ){
    confirm ("Your password will have " + passwordChar + " characters.");
    } else {
    alert ("Please enter a NUMBER between 8 and 128.")
    return "Please enter a NUMBER between 8 and 128.";    
  }
  var charset = '';

  var addLower = confirm("Do you want to include lowercase letters in your password?");

  if (addLower){
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  var addUpper = confirm("Do you want to include uppercase letters in your password?");

  if (addUpper){
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var addNumber = confirm("Do you want to include numbers in your password?");

  if (addNumber){
    charset += "0123456789";
  }

  var addSymbol = confirm("Do you want to include symbols in your password?");

  if (addSymbol){
    charset += "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  }

  // var string = ""; 
  // var passwordChar = length;
  retVal = "";
  for (var i = 0; i < passwordChar; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  console.log(retVal)
  return retVal;
}

// OPTION 2: Should pick from the 4 random functions and pick from the multiple random strings.
// //Add function to generate random lowercase letters
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
// }

// //Add function to generate random uppercase letters
// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
// }

// //Add function to generate random numbers 0-9
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
// }

// //Add funtion to generate random symbols from (https://www.owasp.org/index.php/Password_special_characters).
// //OPTION 1 - using arrays
// // var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// // function getRandomSymbol() {
// //   for (var i = 0; i < symbols.length; i++){
// //     return symbols[Math.floor(Math.random() * symbols.length)];
// //   }
// // }
// //OPTION 2 - found cleaner way to get symbols using constants declaration
// function getRandomSymbol() {
//   const symbols = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// // Add event listener to generate button

// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());

