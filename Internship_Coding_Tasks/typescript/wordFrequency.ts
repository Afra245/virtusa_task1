import * as readline from "readline";

function countWordFrequency(paragraph: string): Map<string, number> {
 
  const wordCount = new Map<string, number>();

  const words = paragraph
    .toLowerCase()
    .replace(/[^a-zA-Z\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 0);

  
  for (const word of words) {
    if (wordCount.has(word)) {
      
      wordCount.set(word, wordCount.get(word)! + 1);
    } else {
      
      wordCount.set(word, 1);
    }
  }

  return wordCount;cla
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Enter a paragraph: ", (paragraph: string) => {
  const frequency = countWordFrequency(paragraph);

  console.log("\nWord Frequency:");

  frequency.forEach((count, word) => {
    console.log(`  "${word}": ${count}`);
  });

  rl.close();
});
