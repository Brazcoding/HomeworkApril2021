// "regular" functions
function greet(name) {
    return `Hello ${name}!`;
  }
  
  function welcome(name) {
    return `${name}, welcome!`;
  }
  
  function informAboutSale(name) {
    return `${name}, we're having a sale!`;
  }
  
  // function that takes a callback function as an argument
  function getNameAndShowMessage(name, callback) {
   return callback(name);
  }
  
  // pass each "regular" function into getAndShowMessage as a callback function
  console.log(getNameAndShowMessage("micheal", greet));
  console.log(getNameAndShowMessage("hayden", welcome));
  console.log(getNameAndShowMessage("Elaine", informAboutSale));