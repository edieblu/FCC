function spinalCase(str) {

  let regex = /[^A-Z0-9]/ig;

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return str.replace(regex, '-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));