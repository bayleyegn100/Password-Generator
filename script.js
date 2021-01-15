// variabls global
var generateBtn = document.querySelector("#generate");
var minimumCount = 8;
var maximumCount = 128;
var options = []
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "_", "~", "?"]
var letterOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var minimumCount = 8;
var maximumCount = 128;

// Prompts that come up after you click generate password
function generatePassword() {
  var newPassword = ""
  var numberOfCharactors = window.prompt("how many charactors your password may have?")
  var shouldHaveSpecialCharactors = window.confirm("should your password have special charactors?")
  var shouldHaveNumbers = window.confirm("should your password have numbers?")
  var shouldHaveUpperCase = window.confirm("should your password have uppercase?")
  var shouldHaveLowerCase = window.confirm("should your password have lowercase?")

  console.log(numberOfCharactors, shouldHaveSpecialCharactors, shouldHaveNumbers, shouldHaveUpperCase, shouldHaveLowerCase)
  
  // Checks to make sure user selected ok for all and uses empty minimums from above
  if (shouldHaveNumbers) {
    options = [...options, ...numberOptions]
  }
  if (shouldHaveSpecialCharactors) {
    options = [...options, ...symbolOptions]
  }
  if (shouldHaveUpperCase) {
    options = [...options, ...letterOptions]
  }
  if (shouldHaveLowerCase) {
    for (let i = 0; i < letterOptions.length; i++) {
      const element = letterOptions[i];
      options.push(element.toLowerCase())
    }
  }
console.log(newPassword)
for (let i =0; i < numberOfCharactors; i++) {
  newPassword += generateRandomCharactor()
}
  return newPassword
}
// Generator functions
function generateRandomCharactor() {
  var index = Math.floor(Math.random() * options.length);
  return options[index]
}
// write password to the #password 
function writePassword(numberOptions, symbolOptions, letterOptions) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
