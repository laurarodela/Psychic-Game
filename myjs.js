// Variables
var lettersArr = ["a ","b","c","d","e","f","g","h","i","j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v","w", "x", "y", "z"]
console.log(lettersArr)

var winsNum = 0;
var lossesNum = 0;
var guessesLeftNum = 10;
var lettersGuessedArr= [];
var guessedLetter = null;

var winningLetter = lettersArr[Math.floor(Math.random()* lettersArr.length)];

console.log(lettersArr.length)

// this is suppose to create a function
function reset() {
    guessesLeftNum = 10;
    lettersGuessedArr= [];
    winningLetter = lettersArr[Math.floor(Math.random() * lettersArr.length)];
}

//making function- document.onekeyup
document.onkey = function(event) {
    var guessedLetter = String. fromCharCode(event.keyCode).toLowerCase();
    console.log(string)
// if/else statement
if (lettersArr.indexOf(event) > -1)
if (userGuess === computerGuess) {
}
    if (userGuess === computerGuess){
        wins++;
        guessesLeftNum = 10;
        guessedLetter = [];
        } 
