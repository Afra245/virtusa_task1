import * as readline from "readline";

function isPalindrome(str: string): boolean {

  const cleaned = str.toLowerCase().replace(/\s+/g, "");


  const reversed = cleaned.split("").reverse().join("");

  
  return cleaned === reversed;
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Enter a string to check for palindrome: ", (input: string) => {
  const result = isPalindrome(input);

  if (result) {
    console.log(`"${input}" is a Palindrome.`);
  } else {
    console.log(`"${input}" is NOT a Palindrome.`);
  }

  rl.close();
});
