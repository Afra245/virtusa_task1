import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a paragraph: ", (paragraph) => {

  const words = paragraph.toLowerCase().split(/\s+/);

  const count: { [key: string]: number } = {};

  for (const word of words) {
    count[word] = (count[word] || 0) + 1;
  }

  console.log("\nWord Frequency:");

  for (const word in count) {
    console.log(word + ": " + count[word]);
  }

  rl.close();
});
