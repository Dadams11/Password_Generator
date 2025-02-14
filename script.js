document.addEventListener("DOMContentLoaded", function () {
  var generateBtn = document.querySelector("#generate");
  
  function getPasswordOptions() {
      var length = parseInt(prompt("How many characters would you like your password to contain?"));
      if (Number.isNaN(length) || length < 8 || length > 128) {
          alert("Password length must be a number between 8 and 128");
          return null;
      }

      function getYesNoResponse(question) {
          let response;
          do {
              response = prompt(question + " (Yes or No)").toLowerCase();
          } while (response !== "yes" && response !== "no");
          return response === "yes";
      }

      var hasLowercase = getYesNoResponse("Include lowercase letters?");
      var hasUppercase = getYesNoResponse("Include uppercase letters?");
      var hasNumbers = getYesNoResponse("Include numbers?");
      var hasSpecial = getYesNoResponse("Include special characters?");
      
      if (!(hasLowercase || hasUppercase || hasNumbers || hasSpecial)) {
          alert("You must select at least one character type!");
          return null;
      }

      return { length, hasLowercase, hasUppercase, hasNumbers, hasSpecial };
  }

  function getRandom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }

  function generatePassword() {
      var options = getPasswordOptions();
      if (!options) return "";

      var lowerChars = "abcdefghijklmnopqrstuvwxyz";
      var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numberChars = "0123456789";
      var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?/";
      
      var possibleCharacters = "";
      var guaranteedCharacters = [];
      
      if (options.hasLowercase) {
          possibleCharacters += lowerChars;
          guaranteedCharacters.push(getRandom(lowerChars));
      }
      if (options.hasUppercase) {
          possibleCharacters += upperChars;
          guaranteedCharacters.push(getRandom(upperChars));
      }
      if (options.hasNumbers) {
          possibleCharacters += numberChars;
          guaranteedCharacters.push(getRandom(numberChars));
      }
      if (options.hasSpecial) {
          possibleCharacters += specialChars;
          guaranteedCharacters.push(getRandom(specialChars));
      }

      var result = guaranteedCharacters;
      for (var i = guaranteedCharacters.length; i < options.length; i++) {
          result.push(getRandom(possibleCharacters));
      }

      return result.join('');
  }

  function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
  }

  generateBtn.addEventListener("click", writePassword);
});
