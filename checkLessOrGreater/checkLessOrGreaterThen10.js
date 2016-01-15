
var numberTen = 10;
function checkNum(){
	var inputNumber = document.getElementById('inputNum').value;
	if(inputNumber < numberTen){
		alert("The number "+inputNumber+" you entered is less then 10");
	}
	else if(inputNumber > numberTen)
		console.log("The number you entered "+inputNumber+" is greater then 10");
	else{
		console.log("The number you entered is equal to 10");
	}
	document.getElementById('inputNum').value='';
}