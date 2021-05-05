// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1")
};
// what will the following lines print?
obj[key]; //"1"
obj.key; //console.log("the key is 'key'")
obj["key"];//console.log("the key is 'key'"),

// create an object with at least four properties, each with a different data type
// name one of the four properties "collection" and set its value to an Array or Object
let things = {
    collection: {
        food: ["vegetables", "fruit", "candy", "chips", "yogurt"],
        bathroom: ["tootpaste", "deodearant"],
        cards: ["greetings", "gift cards"],
    }
    people: {
        workers: ["cashier", "stockers", "welcomeParty"],
        shoppers: [2, 76, 36]
    }
};
// access a value in in "collection" property
console.log(groceries.collection.cards);
console.log(groceries.collection["cards"]);
console.log(groceries["collections"]["cards"]);
// Nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};
// fill in your favorite movie and color below
obj["favorites"] = {
  movie: "Dark knight",
  number: 0,
  color: "Black"
};
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// how many lines will the following for...of statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}
// use a template literal to print a sentence about your favorite movie and color
console.log(`${obj.favorite.movie} and my favorite coloe is ${obj.favorite["color"]}`);
// access the values "b", 4, and 6 from obj.list
console.log(obj.list[1]);
console.log(obj.list[4][1]);
console.log(obj.list[5]."f");
