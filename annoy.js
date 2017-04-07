// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }

// alert ("Yay, we made it!!!");

// Version 2 that will say Yay we made it if yes or yeah is anywhere in the answer

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1  && answer.indexOf("yeah") === -1) {
	var answer = prompt("Are we there yet?");
}

alert ("Yay, we made it!!!");
