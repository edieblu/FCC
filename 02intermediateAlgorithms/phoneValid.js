function telephoneCheck(str) {
  // Good luck!
  const regex = new RegExp(/^(1\s?)?(\(\d{3}\)|\d{3})[\s|-]?\d{3}[\s|-]?\d{4}$/g)

  return regex.test(str);
}

console.log(telephoneCheck("27576227382"));

// 555-555-5555
// (555)555-5555 
// (555) 555-5555 
// 555 555 5555 
// 5555555555 
// 1 555 555 5555

// /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/