function add(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	document.getElementById('result').innerHTML = (parseInt(num1)+parseInt(num2));

}

function concatenate(){
	var string1 = document.getElementById('s1').value;
	var string2 = document.getElementById('s2').value;
	document.getElementById('result2').innerHTML = (string1 + " " + string2);
}

