import * as readline from "readline";

// Task 4: Check whether a string is a palindrome

// Function to check if a string is a palindrome
function isPalindrome(str: string): boolean {
  // Remove spaces and convert to lowercase for fair comparison
  const cleaned = str.toLowerCase().replace(/\s+/g, "");

  // Reverse the string
  const reversed = cleaned.split("").reverse().join("");

  // Check if original and reversed are the same
  return cleaned === reversed;
}

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user for input
rl.question("Enter a string to check for palindrome: ", (input: string) => {
  const result = isPalindrome(input);

  if (result) {
    console.log(`"${input}" is a Palindrome.`);
  } else {
    console.log(`"${input}" is NOT a Palindrome.`);
  }

  rl.close();
});
