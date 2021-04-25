let pizzaPlace = "Genos";
let numberOfToppings = 9;
console.log(pizzaPlace);
console.log(numberOfToppings);

let testTemplateLiteral = `Lets go to ${pizzaPlace}  for pizza and get ${numberOfToppings}  toppings`;
console.log(testTemplateLiteral);

if(numberOfToppings < 10) {
    console.log("Quality, not quantity.");
}   else {
    console.log("A whole lot of pizza.");
}

for(let i = 0; i <= 10; i+=2) {
    console.log(`This is even amount ${i}`);
}
