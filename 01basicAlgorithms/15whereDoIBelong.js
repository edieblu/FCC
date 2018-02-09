function getIndexToIns(arr, num) {
 arr[arr.length] = num;
  var sorted = arr.sort(function(a,b){
 	return a-b;
 });
  return sorted.indexOf(num);
}

console.log(getIndexToIns([2, 5, 10], 15));