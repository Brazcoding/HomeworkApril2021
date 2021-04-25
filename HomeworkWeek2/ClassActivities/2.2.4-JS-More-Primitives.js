// create five variables and assign them values
let dog = "Sammy";
let blocks = 5;
let happy = true;
let space;
let fish = null;
// each variable should reference a different primitive data type
// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable


// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(dog);
console.log(blocks);
console.log(happy);
console.log(space);
console.log(fish);
// create a variable that references a template literal
// inside the template literal, use two variables
let testTemplateLiteral = `"Walking + ${dog} + around + ${blocks} + blocks."`
console.log(testTemplateLiteral)

// reassign the value of the variable that references "null"
let goat = null;

// print the value and its type
console.log(happy, typeof happy);

// print a variable that causes a ReferenceError
//console.log(x);
//let x = 100;

// alter the previous line to no longer cause a ReferenceError
let x = 100;
console.log(x)
