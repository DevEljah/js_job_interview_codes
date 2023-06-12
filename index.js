/////////////////////////////////////////////
///////////* FizzBuzz challenge *////////////
/////////////////////////////////////////////

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// FizzBuzz challenge functional solution: //

function fizzBuzz() {
  let output = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "FizzBuzz\n";
    }
    if (i % 3 === 0) {
      output += "Fizz\n";
    }
    if (i % 5 === 0) {
      output += "Buzz\n";
    } else {
      output += i + "\n";
    }
  }
  return output;
}
console.log(fizzBuzz());

/////////////////////////////////////////////
// passed by value and passed by reference //
/////////////////////////////////////////////
//In JavaScript, primitive data types are passed by value
//and non-primitive data types are passed by reference.

// primitive // passed by value!
/* let x = 2;
let y = x;
x = 4;
let z = y;
console.log(x);
console.log(y);
console.log(z); */

// non-primitive // passed by reference!
/* var obj1 = { name: "Max", surname: "Eljah" };
var obj2 = obj1;
obj1.name = "Dev";
console.log(obj2); */

/////////////////////////////////////////////
/////////// Logical operators: //////////////
/////////////////////////////////////////////
// Logical operators in javascript, unlike operators in other programming languages,
// do not return true or false. They always return one of the operands.

// OR ( || ) operator - If the first value is truthy, then the first value is returned.
// Otherwise, always the second value gets returned.

// AND ( && ) operator - If both the values are truthy, always the second value is returned.
// If the first value is falsy then the first value is returned
// or if the second value is falsy then the second value is returned.

// Example:

var a = 220;
var b = "Hi";
var c = undefined;

a || b; // Returns 220 since the first value is truthy

a || c; // Returns 220 since the first value is truthy

a && b; // Returns "Hi" since both the values are truthy

b && c; // Returns undefined since the second value is falsy

if (a || c) {
  console.log("Code runs"); // This block runs because a || b returns 220 (Truthy)
}

if (a && b) {
  console.log("Code runs"); // This block runs because a && b returns "Hi" (Truthy)
}

function myFunction() {
  var x = 5;
  // debugger; // Execution pauses here
  console.log(x);
}

myFunction();

console.log("deb");
