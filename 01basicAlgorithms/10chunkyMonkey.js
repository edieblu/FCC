function chunkArrayInGroups(arr, size) {
	result = [];
	for (var i = 0; i < arr.length; i+=size){
		result.push(arr.slice(i, i+size));
	}
	return result;

}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
