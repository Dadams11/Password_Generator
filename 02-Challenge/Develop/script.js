// Assignment Code
var generateBtn = document.querySelector("#generate");

// create arrays here in the global scope, from strings that you split using the .split() method
var specialCharactersArray = '!@$%^&*()/+-'.split('') // split by character and return an array of special characters
//console.log('specialCharactersArray', specialCharactersArray);
// do the same thing for lowercase letters, uppercase letters, and numbers
var lowercaseCharactersArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseCharactersArray = 'ABCDEFGHIJKLMONPQRSTUVWXYZ'.split('');
var numbers = '1234567890' .split('')
// create an array (empty) which will hold all the possible characters from which to make your password
var masterArray = [];
// create an empty string to hold your generated password
var randomPassword = ""


function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // YOU WILL NEED MORE CODE IN HERE!~!!!!!!!!-----------------------------------


  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  // you need to include some more confirm statements for lowercase, uppercase, and numbers
  // put that here
  var wantsUppercase = confirm("Want uppercase characters?");
  // var wantsLowercase = ...

  // Object to store user input
  var passwordOptions = {
    length,
    hasSpecialCharacters,
    wantsUppercase
    // continue with the other variable names here

  }

  return passwordOptions;
}



// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();

  // Variable to store password as it's being concatenated
  //var result = [];

  // Array to store types of characters to include in password
  //var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  //var guaranteedCharacters = [];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    masterArray = masterArray.concat(specialCharactersArray);
    //possibleCharacters = possibleCharacters.concat(specialCharacters);
    //guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // do the same thing for uppercase letters
  if (options.wantsUppercase) {
    masterArray = masterArray.concat(uppercaseCharactersArray)
  }
if (options.wantsLowercase){
  masterArray = masterArray.concat(lowercaseCharactersArray)

}
  // now that you have your master array with all the characters possible
  // randomly select a character from it, for as many times as you need to reach the length desired by the user
  for(var i = 0; i < options.length; i++) {
    var randomChar = getRandom(masterArray);
    randomPassword = randomPassword.concat(randomChar);
  }

  // Transform the result into a string and pass into writePassword
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
