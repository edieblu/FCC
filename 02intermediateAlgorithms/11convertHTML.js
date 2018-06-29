function convertHTML(str) {
  // &colon;&rpar;
  const dict = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    "'" : "&apos;",
    '"' : "&quot;"
  }
  return str
  .replace(/&/g, "&amp;")
  .replace(/</g,"&lt;")
  .replace(/>/g, "&gt;")
  .replace(/'/g, "&apos;")
  .replace(/"/g, "&quot;")
}


console.log(convertHTML("Hamburgers < Pizza < Tacos"));