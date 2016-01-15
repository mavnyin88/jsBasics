$(document).ready(function(){

/*$("#l1").hover(function(){
	$(this).animate({
		width:"200px",
		height:"350px"
	}, 1000);
});*/

$("img.hov").click(function(){
	/*window.location.href = this.id + '.html';*/
	if(this.id === "leftDoor"){
	alert("LOSER!");
	}
	else if(this.id === "centerDoor"){
		alert("LOSER!");
	}
	else if(this.id === "rightDoor"){
		alert("WINNER!");
	}
});

});