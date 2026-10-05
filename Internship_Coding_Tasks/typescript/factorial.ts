import * as readline from "readline";

// Task 6: Find factorial of a number

// Recursive function to calculate factorial
function factorial(n: number): number {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n * factorial of (n-1)
  return n * factorial(n - 1);
}

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user for input
rl.question("Enter a non-negative integer to find its factorial: ", (input: string) => {
  const n = parseInt(input);

  // Validate input
  if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
  } else {
    const result = factorial(n);
    console.log(`Factorial of ${n} = ${result}`);
  }

  rl.close();
});
