/* Variables */
var myString = "Mike";
var myString2 = "EyYo";
var myNumber = 400; /* all numbers are considered floats*/
var myNumber2 = 2.3;
var myNumber3 = 2.30102;
var myBool = true;
var myBool2 = false;
var undefinedVar; /* not assigned anything */

console.log(myNumber3+" "+myString);
console.log(myBool2);
console.log(undefinedVar);

var myArray = ["Blue","Orange","White"];
var myMixedArray = ["New York", 23, true];
var multiDimArray = [myArray,myMixedArray];
var aboutMe = {firstname: "Michael", lastname: "Avnyin", birthday: "05/23/1988", arrayInterests: ["sports",12,"music","coding"]};

console.log(myArray[0]);
console.log(myMixedArray[2]);
console.log(multiDimArray[1][0]);
console.log(aboutMe.arrayInterests[0]+" "+aboutMe.firstname);
console.log(aboutMe['birthday']);
console.log()

var hi = 'hi';
var hi2 = 'hi';
console.log("myString" === "myString2");
console.log("myString" == "Mike");
console.log("myString" === "Mike");
console.log("myString2" == "myString2");
console.log("myString2" === "myString2");
console.log("myString2" != "myString");
console.log("hello" === "hello");
console.log("h1" === "hi2");
console.log("h1" == "hi2");
console.log((20-10) == "10");
console.log((20-10) === "10");
console.log((20-10) == 10);
console.log((20-10) === 10);


function add(num1,num2){
	var total = (num1+num2);
	console.log("The total is"+" "+total);
	if(total < 100){
		console.log("Your total is less then 100");
	}
	else if(total > 100){
		console.log("Your total is greater then 100");
	}
}
add(10,34);
add(34.21,323.32);

function product(num1,num2){
	var prod = (num1*num2);
	console.log("The product is"+" "+prod);
	if(prod < 100*3){
		console.log("Your product is less then 300");
	}
	else if (prod > 100*5){
		console.log("Your product is greater then 500");
	}
	else
		console.log("Your product is between 300-500 range");
}

product(52,62);
product(100,4);
product(20,40);

function divide(num1,num2){
	var quotient = (num1/num2);
	if(quotient === 10){
		console.log("Your quotient is 10");
	}
	else if (quotient === 5){
		console.log("Your quotient is 5");
	}
	else if (quotient != 10 || quotient != 5){
		console.log("Your quotient is "+quotient);
	}

}
divide(100,10);
divide(25,5);
divide(12,5);
divide(150,42);
