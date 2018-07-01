function sumPrimes(num) {
  // build a helper function
  function isPrime(n){
    for (let i = 2; i <= n; i++ ){
      if (n % i === 0 && n!= i) {
        return false;
      }
    }
    return true;
    
  }
  // base case (stops recursion)
  if (num === 1){
    return 0;
  }

  if (isPrime(num) === false){
    return sumPrimes(num-1);
  }
  if (isPrime(num) === true){
    return num + sumPrimes(num-1)
  }

}

console.log(sumPrimes(10));


