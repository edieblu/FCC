function steamrollArray(arr) {
  // I'm a steamroller, baby
  // somewhere to store result
  let result = [];
  // perform a function on each element
  arr.forEach(el =>{
    // check if el is array
    if(Array.isArray(el)){
      // use Array spread to allow for n number of el
      result.push(...steamrollArray(el))
      // if not array, already flat, just push
    } else {
      result.push(el)
    }
  });
  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
