
function titleCase(str) {
  return str.toLowerCase().split(" ").map(function(word){
  	return  word[0].toUpperCase() + word.substring(1,word.length);
  }).join(" ");
}
