function destroyer(arr) {
	var duplicate = [];
for (var i = 1; i < arr.length; i++) {
		duplicate.push(arguments[i])
	}
	var result = arguments[0].filter(item => duplicate.indexOf(item) ==-1);
	return result;
}


console.log(destroyer(["tree", "hamburger", 53], "tree", 53));

