
function slasher(arr, howMany) {
  if (howMany >= arr.length) {
  	return [];
  } else {
  	  return arr.splice(howMany);
  }

}

