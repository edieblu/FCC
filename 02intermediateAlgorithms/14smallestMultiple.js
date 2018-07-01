function smallestCommons(arr) {
  arr = arr.sort((a,b)=>{
    return a-b;
  });

  const min = arr[0];
  const max = arr[1];
  let smallest;

  // Euclid Algorithm for the Greatest Common Divisor
  function gcd(a, b) {
    return !b
        ? a
        : gcd(b, a % b);
  }
  
  // Euclid Algorithm for the Least Common Multiple
  function lcm(a, b) {
    return a * (b / gcd(a, b));
  }

  for (let i = smallest = min; i <= max; i++){
    smallest = lcm(i, smallest);
  }
  return smallest
}


console.log(smallestCommons([5,1]));

