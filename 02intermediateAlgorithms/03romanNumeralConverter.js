
function convertToRoman(num) {
	var result = [];
	var romanString = "";
	var romans = ["M","CM","D","CD","C","XC", "L", "XL", "X","IX","V","IV","I"];
	var romansArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

	for (var i = romansArr.length-1; i >= 0; i--){
		// only check  against Romans smaller than num
		if (num >= romansArr[i]) {
		 result.push(Math.round((num / romansArr[i])-(num % romansArr[i])/romansArr[i]));
		 // the new num is the remainder from the first round
		 num = num % romansArr[i];
		} 
		else {
			result.push(0);
		}
	}
	for (i = 0; i < result.length; i++) {
		romanString+= romans[i].repeat(result[i]);
	}
	return romanString;
}

console.log(convertToRoman(28));

