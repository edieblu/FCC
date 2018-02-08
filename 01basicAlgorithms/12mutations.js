function mutation(arr) {
  var big = arr[0];
  var small = arr[1].split("");
  var result = [];
  for (var i = 0; i < small.length; i++) {
  	if (big.toLowerCase().indexOf(small[i].toLowerCase()) != -1) {
  		result.push(small[i]);
  		}
	}
  return result.length === small.length? true : false;
}