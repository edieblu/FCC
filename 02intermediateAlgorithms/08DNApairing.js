function pairElement(str) {
  let result = [];
  const dict =  {
    A :"T",
    T : "A",
    C : "G",
    G : "C"
  }
  for (let i = 0; i < str.length; i++){
    result[i] = Array(str[i]);
    result[i].push(dict[str[i]]);
  }
  return result;
}

console.log(pairElement("ATCGA"));