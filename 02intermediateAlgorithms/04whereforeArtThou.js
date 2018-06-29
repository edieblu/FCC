function whatIsInAName(collection, source) {
  // What's in a name?
  // Only change code below this line
 var prop = Object.keys(source);
return collection.filter(obj => {
  for (var i = 0; i < prop.length; i++){
      if(!obj.hasOwnProperty(prop[i]) || obj[prop[i]] !== source[prop[i]]) {
        return false;
      }
    }
    return true;
})

  
  // Only change code above this line
  return arr;
}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));