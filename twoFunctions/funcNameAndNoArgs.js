var iName;
function tellName(iName){
	iName = document.getElementById('inputName').value;
	alert("Your name is "+iName);
	console.log("Your name is "+iName);
	document.getElementById('inputName').value='';
}

/*WILL DISPLAY IN CONSOLE ONLY*/
function tellNameHardCoded(hName){
	console.log("Your name is "+hName);
}
tellNameHardCoded("Miguel");

function noArgs(){
	console.log("Im running a method with no arguments");
}
noArgs();