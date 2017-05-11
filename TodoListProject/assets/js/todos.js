//check off specific todos by clicking
$("ul").on("click", "li", function(){
	// //if li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	//turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }
	// //else
	// else {
	// 	//turn it gray
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
	//all of the above code can be deleted using css class instead
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //have to put .remove inside the callback function or it will override the fade out
	}); //this fades out the parent li and not just the span
	event.stopPropagation();
//the above code stops the event from bubbling up ie having the li click listener function
//during span click function
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) { // the 13 is the number value for the enter key that you use with .which
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//creat a new li andd to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-pencil").click(function(){
$("input[type='text']").fadeToggle();
});