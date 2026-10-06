import * as readline from "readline";
function factorial(n: number): number {
 
  if (n === 0 || n === 1) {
    return 1;
  }
  
  return n * factorial(n - 1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a non-negative integer to find its factorial: ", (input: string) => {
  const n = parseInt(input);
  if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
  } else {
    const result = factorial(n);
    console.log(`Factorial of ${n} = ${result}`);
  }

  rl.close();
});
