var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function(){
// 	if(isPurple){
// 		document.body.style.background="white";
// 		}else{
// 		document.body.style.background="purple";
// 	}
// 	isPurple = !isPurple;  //refactor isPurple is equal to not isPurple instead of boolean statements
// });//switches between true and false
//if white
//make it purple
//else
//make it white

//refactor again making a css class in style tag in html "purple" and use toggle

button.addEventListener("click", function(){
		document.body.classList.toggle("purple");
	});