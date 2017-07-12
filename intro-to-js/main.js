// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
<<<<<<< HEAD
// A: an undefined variable
=======
// A:  Variable
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
<<<<<<< HEAD
// A: "Tim"
=======
// A: Tim
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 3.
// What is `givenName` set to right now?
givenName = givenName;
<<<<<<< HEAD
// A: "Tim"
=======
// A: givenName
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
<<<<<<< HEAD
// A: Hello, how are you? Tim.
=======
// A: a string and a variable
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 5.
// What is `math` set to?
let high = 50;
let low = 10;
let math = high - low;
<<<<<<< HEAD
// A: 40
=======
// A: subtract low from high
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 6.
// What is `math` set to?
math = high - "5";
<<<<<<< HEAD
// A: 45
=======
// A: math equals variable minus string
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
<<<<<<< HEAD
let sum = givenName + (born - today) + " years old";
console.log(sum);
// A: "Tim is 33 years old"
=======
// A:
// let givenName = "Tim";
// let born = 1984;
// let today = 2017;
// let sum = givenName + " is " + (today - born);
// console.log(sum);

>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 8.
// Adjust this code. Store some information in the following variables.
// A:
<<<<<<< HEAD
let yourName = "I'm";
let instructorName = "Lexi";

=======
// let yourName;
// let instructorName;
let yourName = "Shontae";
let instructorName = "Doug";
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60

// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A: yourName = "Shontae";
// instructorName = "Doug";


// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log(statement);

// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
<<<<<<< HEAD
let myNumber = 1;
let myString = "Hello";
let myBoolean = false;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined;
// A: The above variable is "let myUndefined;"" is defined.
=======
let myNumber = 8;
let myString = "Hello, World";
let myBoolean = true;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined;
// A: let myUndefined = '';
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. true


// 12.
let y = (false == "");
// A. true


// 13.
let z = (0 == "");
// A. true


// 14.
let a = (null == null);
// A. true


// 25.
let b = (undefined == undefined);
// A. true


// 16.
let c = (undefined == null);
// A. true


// 17.
let d = (null == false);
// A. false


// 18.
let e = (NaN == null);
// A. false


// 19.
let f = (NaN == NaN);
// A. false
<<<<<<< HEAD

=======
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;
if(thirsty = true) {

<<<<<<< HEAD
if (thirsty == true) {
=======
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let x;

if (x) {
  console.log("True!");
} else {
  console.log("False!");
}
<<<<<<< HEAD
// A: False!
=======
// A: true
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 22.
if ("") {
  console.log("True!");
} else {
  console.log("False!");
}
<<<<<<< HEAD
// A: False!
=======
// A: false
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 23.
// this expression will set x to NaN
let x = 1 * undefined;

if (x) {
  console.log("True!");
} else {
  console.log("False!");
}
<<<<<<< HEAD
// A: False!
=======
// A: false
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 24.
if (false) {
  console.log("True!");
} else {
  console.log("False!");
}
<<<<<<< HEAD
// A: False!
=======
// A: false
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 25.
if (-5 && 5) {
  console.log("True!");
} else {
  console.log("False!");
}
<<<<<<< HEAD
// A: True!
=======
// A: true
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 26.
if ("Hello World!") {
  console.log("True!");
} else {
  console.log("False!");
}
<<<<<<< HEAD
// A: True!
=======
// A: true
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 27.
if ({}) {
  console.log("True!");
} else {
  console.log("False!");
}
<<<<<<< HEAD
// A: True!
=======
// A: true
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 28.
if ({
    name: "Yehuda Katz"
  }) {
  console.log("True!");
} else {
  console.log("False!");
}
<<<<<<< HEAD
// A: True!
=======
// A: true
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 29.
if (new Date()) {
  console.log("True!");
} else {
  console.log("False!");
}
<<<<<<< HEAD
// A: True!
=======
// A: true
>>>>>>> 1f53d6bed3afe9fc1293d7d60748605d9bc9fd60


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
