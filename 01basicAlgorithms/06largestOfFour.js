function largestOfFour(arr) {
	var result = [];
	function largestOf(arr){
		return arr.reduce(function(a,b){
			return a > b ? a : b;
		});
	}
	 arr.forEach(function(nums){
		result.push(largestOf(nums));
	});

 	return result;
 
}