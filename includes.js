/*
3. Checking Array Membership with ‘includes’
Instructions:
Create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.
Print a message to the console indicating whether the element is present in the array or not. 
*/

// different books containing array
let Books = ["Lalshalu", "Padma Nadir Majhi", "Bishad Sindhu", "JavaScript: The Good Parts"];

// includes a javaScript book
let javaScriptBook = Books.includes("JavaScript: The Good Parts");
console.log(Books)

// print a message to the console with if else terms
if(javaScriptBook){
    console.log("The array contains a javaScript book");
}else{
    console.log("The array doesn't contain a JavaScript book")
}