// ASCI for all caps is 65-90

function rot13(str) {
	var result = [];
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
			result.push(String.fromCharCode(str.charCodeAt(i)))
		}  else if (65 <= str.charCodeAt(i) && str.charCodeAt(i) < 78) {
			result.push(String.fromCharCode(str.charCodeAt(i) + 13));
		} 
		else {
			result.push(String.fromCharCode(64 + (str.charCodeAt(i)+13-90)));
		}
	}
	return result.join("");
}

console.log(rot13("SERR PBQR PNZC"));