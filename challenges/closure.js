// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/*The internal variable may be inside the function myFunction, but it is still outside of the nestedFunction. When nestedFunction is invoked it first looks inside itself for the variable internal, when it is unsuccessful it turns outword and finds the definition of the variable. Thus, since both internal variable and nested function live on the same scope, nestedFunction doesn't have any scope issues.


*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  let newNum = 0;
  for(let i = 0; i <= num; i++) {
    newNum += i;
  }
  return newNum;
}

console.log(summation(4));