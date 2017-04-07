function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i-- ) {
		console.log (arr[i]);
	}
}

printReverse([5,2,6,3])
//write a function that takes an array as an argument and prints out the elements in the array in reverse order (don't reverse the array itself)
//example printReverse(["a", "b", "c",]);
//"c"
//"b"
//"a"

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
	// for(i = 0; i < array.length; i++){
	// 	if(array[i] !== [i+1]){
	// 		console.log("false");
	// 	}
	// }
	// console.log("true");
}

// write a function isUniform() which takes an array as an 
// argument and returns true if all elements in the array are 
// identical

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

// function sumArray(arr){
// 	var total = 0
// 	for( var i = 0; i <= arr.length; i++){
// 		console.log(total += arr[i]);
// 	}
// }

// write a function sumArray() that accepts an array of number
// and returns the sum of all numbers in the array

// function max(arr){
// 	console.log(Math.max.apply(null, arr));
// }


function max(arr){
	var max = arr[0];
	for(var i = 1; i< arr.length; i++){
		if (arr[i] > max){
			max = arr[i];
		}	
	}
	return(max);
}

//write a function max() that accepts an array of 
//numbers and returns the maximun number in the array