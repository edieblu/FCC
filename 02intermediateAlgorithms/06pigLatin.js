function translatePigLatin(str) {
  const vowel = "aeiou";
  let index = 0;

  if (vowel.indexOf(str[0]) !== -1){
    return str + "way";
  } else {
    for (let i = 1; i < str.length; i++){
      if (vowel.indexOf(str[i])!==-1){
        index = str.indexOf(str[i]);
        return str.substr(index) + str.substr(0,index)+"ay";
      }
    }
  }
  return str + "ay";
}

console.log(translatePigLatin("paragraphs"));