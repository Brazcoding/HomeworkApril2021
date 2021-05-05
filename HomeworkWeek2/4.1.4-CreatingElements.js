// create a new unordered list (ul) element
document.querySelector("p").appendChild(newUnorderedList);
// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar").remove("p")
// add your new ul element to the nav-bar
let listItem = document.createElement("ul");
// create two new list item (li) elements, and add some text to them
let listItem = document.createElement("li");
let listItem2 = document.createElement("li");
listItem = "yay"
listItem = "Hoorah"
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar").appendChild(listItem);
document.querySelector(".nav-bar").appendChild(listItem2);