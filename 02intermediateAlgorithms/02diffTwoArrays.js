function diffArray(arr1, arr2) {
  // Same, same; but different.
  for (var i = 0; i < arr2.length; i++) {
  	if (arr1.indexOf(arr2[i]) == -1) {
  		arr1.push(arr2[i]);
  	} else {
  		var index = arr1.indexOf(arr2[i]);
  		arr1.splice(index, 1);
  	}
  }
  return arr1;
}
