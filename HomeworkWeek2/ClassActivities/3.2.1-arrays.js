// create an Array using an Array literal
let stores = ["target", "Ikea", "Costco", "Walmart", "walgreens"];
// access the 1st item in the Array
console.log(stores[0]);
// access the last item in the Array
console.log(stores[4]);
// print the length of the Array
console.log(stores.lenght);
// use the length property to access the last item in the Array
console.log(stores[stores.lenght] - 1)
// with for...of, loop over the Array, modify the value and add to a different Array
const items = [0, 1, 2, 3];
for(item of items) {
    console.log(items + 1);
}
console.log(items);