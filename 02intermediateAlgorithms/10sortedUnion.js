function uniteUnique(arr) {
let args = Array.from(arguments);
args = [...arguments];
let result = []
  for (let i = 0; i < args.length; i++){
    for (let j = 0; j < args[i].length; j++){
      let compare = args[i][j];
      if (result.indexOf(compare) ===-1){
        result.push(compare);
      }
    }
    
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]))


