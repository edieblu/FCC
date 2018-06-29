function fearNotLetter(str) {
  let result = undefined;
  for (let i = 1; i < str.length; i++){
    let curr = str.charCodeAt(i);
    let prev = str.charCodeAt(i-1);
    if (curr - prev !==1){
      return String.fromCharCode(curr-1);
    }
  }
  return result;
}

console.log(fearNotLetter("abce"));