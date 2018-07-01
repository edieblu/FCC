function dropElements(arr, func) {
  // Drop them elements.
  let runTimes = arr.length;
  for (let i = 0; i < runTimes; i++){
    if (func(arr[0])){
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}


console.log(dropElements([1, 2, 3], function(n) {return n > 0;}))

