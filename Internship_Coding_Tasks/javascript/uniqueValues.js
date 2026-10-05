const readline = require("readline");

// Task 9: Find unique values in an array using Set

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user to enter numbers separated by commas
rl.question(
  "Enter numbers separated by commas (e.g. 1,2,3,2,4,1): ",
  (input) => {
    // Split input by comma and convert each to a number
    const numbers = input.split(",").map((num) => parseFloat(num.trim()));

    console.log("Original array: [" + numbers.join(", ") + "]");

    // Use Set to automatically remove duplicate values
    const uniqueSet = new Set(numbers);

    // Convert Set back to an array for display
    const uniqueArray = [...uniqueSet];

    console.log("Array with unique values: [" + uniqueArray.join(", ") + "]");
    console.log(
      `Removed ${numbers.length - uniqueArray.length} duplicate(s).`
    );

    rl.close();
  }
);
