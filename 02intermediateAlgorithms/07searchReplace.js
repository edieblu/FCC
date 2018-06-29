function myReplace(str, before, after) {
  const regexp = /^[A-Z]/;
  if(regexp.test(before)){
    let alter =after[0].toUpperCase() + after.substr(1);
    return str.replace(before, alter);
  }

  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));