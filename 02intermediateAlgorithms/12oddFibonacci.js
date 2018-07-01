function sumFibs(num) {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++){
    const a = arr[i-1];
    const b = arr[i-2];
    arr[i] = a + b;
  }
  return arr.filter((n) =>{
    return (n % 2 !==0 && n <= num)
  }).reduce((a,b) => {
    return a + b;
  },0)
  
}

console.log(sumFibs(75025));

// 1, 1, 2, 3, 5 and 8, 13.