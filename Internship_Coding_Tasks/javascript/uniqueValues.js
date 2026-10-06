const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Enter numbers separated by commas (e.g. 1,2,3,2,4,1): ",
  (input) => {
    const numbers = input.split(",").map((num) => parseFloat(num.trim()));

    console.log("Original array: [" + numbers.join(", ") + "]");
    const uniqueSet = new Set(numbers);
    const uniqueArray = [...uniqueSet];

    console.log("Array with unique values: [" + uniqueArray.join(", ") + "]");
    console.log(
      `Removed ${numbers.length - uniqueArray.length} duplicate(s).`
    );

    rl.close();
  }
);
