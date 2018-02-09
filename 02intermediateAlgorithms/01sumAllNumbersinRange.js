
function sumAll(arr) {
	var result = [];
  arr  = arr.sort(function(a,b){
  	return a-b;
  })
  for (var i = arr[0]; i <= arr[1]; i++) {
  	result.push(i);
  }

  return result.reduce(function(a,b){
  	return a+b;
  });
}

console.log(sumAll([10, 5]));