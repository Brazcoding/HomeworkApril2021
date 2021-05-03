let pizzaToppings = [" Lettuce", " Mushrooms", "Onions", " Olives", " Plain"];
    console.log(pizzaToppings[2]);

let pizzaSize = ["large", "medium", "small"];
let pizzaCrust = ["thick", "thin", "original"];

    
    function greetCustomer () {
      for(x=0; x<pizzaToppings.length; x++)
      return `welcome to pizza house, our toppings are ${pizzaToppings}`
    };
    
    console.log(greetCustomer());

    const getPizzaOrder = (test1, test2, test3) => {
      return `One ${test1} ${test2} crust pizza with ${test3} coming up!`;
 } 
    const comingUP = getPizzaOrder(pizzaSize[1], pizzaCrust[0], pizzaToppings[2]);
    console.log(comingUP);

    const preparePizza = (pizza1, pizza2, pizza3) => {
      return `Cooking ${pizza1}, ${pizza2} crust,${pizza3} pizza.`;
    };
    const pizzaPlus = preparePizza(pizzaSize[1], pizzaCrust[0], pizzaToppings[2]);
    console.log(pizzaPlus);

  const servePizza = (homePizza1, homePizza2, Homepizza3) => {
     return `Order up! Here's your ${homePizza1} ${homePizza2} crust pizza with ${Homepizza3}. Enjoy!`
};

  const done = servePizza(pizzaSize[1], pizzaCrust[0], pizzaToppings[2]);
    console.log(done);