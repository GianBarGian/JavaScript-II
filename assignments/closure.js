// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function sillyClosureOnNumbers () {
  const zero = 0;
  return function natural () {
    const natural = "natural numbers";
    return function integer () {
      const integer = "integer numbers";
      return function rational () {
        const rational = "rational numbers";
        return function irrational () {
          const irrrational = "irrational"
          return function real () {
            const real = "real numbers"
            console.log("It's a prank, bro!")
          }   
        }
      }
    }
  }
} 


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
const counter = () => {
  let count = 0;
  return () => ++count;
};
const newCounter = counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  }  
};
const newCounterFactory = counterFactory();