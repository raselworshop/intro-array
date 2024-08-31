/* 
1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
*/
let fruits = ["Apple", "Guava", "Jackfruit", "Mango", "Papaya"];
// fruits["3"] = "Litchi";
fruits.push("Angur");
fruits.push("Banana");
fruits.pop();
fruits.unshift("Banana");
fruits.shift();
console.log(fruits.length);
console.log(fruits)