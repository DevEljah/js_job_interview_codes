/////////////////////////////////////////////
///////////* FizzBuzz challenge *////////////
/////////////////////////////////////////////

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
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
    } else if (i % 3 === 0) {
      output += "Fizz\n";
    } else if (i % 5 === 0) {
      output += "Buzz\n";
    } else {
      output += i + "\n";
    }
  }
  return output;
}
console.log(fizzBuzz());
