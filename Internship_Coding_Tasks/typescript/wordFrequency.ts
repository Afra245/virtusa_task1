import * as readline from "readline";

// Task 5: Count word frequency in a paragraph using Map

// Function to count word frequency
function countWordFrequency(paragraph: string): Map<string, number> {
  // Create a Map to store word counts
  const wordCount = new Map<string, number>();

  // Split paragraph into words, lowercase and remove punctuation
  const words = paragraph
    .toLowerCase()
    .replace(/[^a-zA-Z\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 0);

  // Count each word
  for (const word of words) {
    if (wordCount.has(word)) {
      // If word exists, increment its count
      wordCount.set(word, wordCount.get(word)! + 1);
    } else {
      // If word is new, set count to 1
      wordCount.set(word, 1);
    }
  }

  return wordCount;
}

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user for input
rl.question("Enter a paragraph: ", (paragraph: string) => {
  const frequency = countWordFrequency(paragraph);

  console.log("\nWord Frequency:");
  // Display each word and its count
  frequency.forEach((count, word) => {
    console.log(`  "${word}": ${count}`);
  });

  rl.close();
});
