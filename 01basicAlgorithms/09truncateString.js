function truncateString(str, num) {
  if (num > 3) {
  	if (num >= str.length) {
  		return str;
  	}
  	return str.substr(0, num-3) + "...";
  }
  else {
  	return str.substr(0, num) + "...";
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

