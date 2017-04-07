//conditionals
//bouncer at concert, under 18 can't come in, 18-21 can come in but can't drink, over 21 can come in and drink
if (age < 18) {
	console.log("Sorry, you can't come in.");
}

else if (age < 21) {
	console.log("You can come in, but you can't drink.");
}


else {
	console.log ("Come on in!");
}


var age = prompt ("What is your age?");

//if age is negative

if (age < 0) {
	console.log ("Your age is an error.")
}

//if age is 21
if (age === 21) {
	console.log ("Happy 21st birthday!!!");
}

//if age is an odd number
if (age % 2 !== 0) {
	console.log ("You age is odd!");
}

//if age is a perfect square
if (age % Math.sqrt(age) === 0) {
	console.log ("You are a perfect square");
}