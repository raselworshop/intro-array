/*
4. Checking if it's an Array
Instructions:
Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not.
*/

//create different variables to identify if it is a variable
{
let fruits = ["Apple", "Banana", "Grape", "Mango", "Jackfruit"]; //this is a array
let isArray = Array.isArray(fruits);
//  console.log(fruits + "  " + isArray);
console.log("Fruits: " + fruits);
console.log("Is Array: " + isArray);}

{let name = "rasel";
let isName = Array.isArray(name);
console.log("Name : " + name)
console.log("Is Array : " + isName +" "+ typeof(name))}

{
    let age = 24;
    let isAge = Array.isArray(age);
    console.log("Age is: " + age);
    console.log("Is Array: " + isAge +" "+ typeof(age))   
}



