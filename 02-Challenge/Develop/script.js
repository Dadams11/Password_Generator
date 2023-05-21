// Assignment Code
var generateBtn = document.querySelector("#generate");

// create arrays here in the global scope, from strings that you split using the .split() method
var specialCharactersArray = '!@$%^&*()/+-'.split(''); // split by character and return an array of special characters
//console.log('specialCharactersArray', specialCharactersArray);
// do the same thing for lowercase letters, uppercase letters, and numbers
var lowercaseCharactersArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseCharactersArray = 'ABCDEFGHIJKLMONPQRSTUVWXYZ'.split('');
var numbersArray = '1234567890' .split('');
// create an array (empty) which will hold all the possible characters from which to make your password
var masterArray = [];
// create an empty string to hold your generated password
var randomPassword = ''


function getPasswordOptions() {

  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain? (8 - 128 characters)'), 
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length) || length < 8 || length > 128) {
    alert('Password length must be provided as a number, between 8-128 characters, please try again')
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  // needed to include some more confirm statements for lowercase, uppercase, and numbers
  var wantsUppercase = confirm("Want uppercase characters?");
  var wantsLowercase = confirm ("Want lowercase characters?");
  var wantsNumbers = confirm("Want numbers?");
  

  // Object to store user input
  var passwordOptions = {
    length,
    hasSpecialCharacters,
    wantsUppercase,
    wantsLowercase,
    wantsNumbers,
   

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

  
  if (!options) return null;

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    masterArray = masterArray.concat(specialCharactersArray);
  }

  if (options.wantsUppercase) {
    masterArray = masterArray.concat(uppercaseCharactersArray);
  }
if (options.wantsLowercase){
  masterArray = masterArray.concat(lowercaseCharactersArray);
}
if (options.wantsNumbers){
masterArray= masterArray.concat(numbersArray);
}
  // now that you have your master array with all the characters possible
  // randomly select a character from it, for as many times as you need to reach the length desired by the user
  for (var i = 0; i < options.length; i++) {
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