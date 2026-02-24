const fs = require('fs');

function readInput() {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    return args.join(' ');
  }

  const data = fs.readFileSync(0, 'utf8');
  return data.replace(/\r?\n/g, ' ');
}

function splitIntoWords(text) {
  // TODO: handle multiple spaces, punctuation, and case normalization.
  return text.split(' ');
}

function countUnique(words) {
  // TODO: ignore empty tokens and handle case-insensitive counting.
  return new Set(words).size;
}

function main() {
  const text = readInput();
  const words = splitIntoWords(text);

  const totalWords = words.length;
  const uniqueWords = countUnique(words);

  console.log(`Total words: ${totalWords}`);
  console.log(`Unique words: ${uniqueWords}`);
}

main();
