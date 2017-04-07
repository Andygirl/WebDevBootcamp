//create secretNumber
var secretNumber = 4;

//ask user for guess; could put Number(prompt("Guess a number")) and not have to use the two Number(guess) below
var guess = prompt("Guess a number");

//check if guess is right; Number(guess) turns prompt (which only makes strings) into a number
if(Number(guess) === secretNumber) {
	alert("You guessed right!");
}

//otherwise, check if higher
else if(Number(guess) > secretNumber) {
	alert("You guessed too high, guess again.");
}

//otherwise, check if lower
else {
	alert("You guessed too low, guess again.");
}

//or could do like this

//create secretNumber
var secretNumber = 4;

//ask user for guess;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right; Number(guess) turns prompt (which only makes strings) into a number
if(guess === secretNumber) {
	alert("You guessed right!");
}

//otherwise, check if higher
else if(guess > secretNumber) {
	alert("You guessed too high, guess again.");
}

//otherwise, check if lower
else {
	alert("You guessed too low, guess again.");
}
