
var music = ["The Beatles","The Beach Boys","Foo Fighters","Blink-182",4];
var sports = ["New York Giants","New York Islanders","New York Yankees",3];
var myInterests = [sports,music];

console.log("Prints our multi-dimensional array")
for (var i = 0; i < myInterests.length; i++) {
	for (var j = 0; j < myInterests[i].length; j++) {
		console.log(myInterests[i][j]);
	};
};

