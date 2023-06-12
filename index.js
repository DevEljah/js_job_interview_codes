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
