//03/APR/2025

//1. *** SPREAD Operator ***
//that allows you to expand or "spread" iterable elements like arrays, objects, or strings into individual elements.

const original = [1, 2, 3, 4];
const duplicate = [...original];

// For arrays
const newArray = [...iterable];

// For objects
const newObject = { ...object };

// In function calls
myFunction(...iterable);

//--------------------------------------------------------------------------------------------
//2. *** Rest Parameter ***

//Example 1
const sum = (...givenArray) => {
  //rest parameter
  // a feature in JavaScript that allows you to represent an indefinite number of arguments as an array.
  let sumValue = 0;

  for (i = 0; i <= givenArray.length; i++) {
    sumValue += givenArray[i];
  }

  return sumValue;
};

const sumValue = sum(1, 2, 4, 5);

//Example 2
function greet(greeting, ...names) {
  console.log(`${greeting}, ${names.join(" and ")}!`);
}

greet("Hello", "Alice", "Bob", "Charlie");
// "Hello, Alice and Bob and Charlie!"
