const fs = require("fs");

function readInput() {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    return args.join(" ");
  }

  const data = fs.readFileSync(0, "utf8");
  return data.replace(/\r?\n/g, " ");
}

function splitIntoWords(text) {
  // TODO: handle multiple spaces, punctuation, and case normalization.
  return text.split(" ");
}

function countUnique(words) {
  // TODO: ignore empty tokens and handle case-insensitive counting.
  return new Set(words).size;
}

function main() {
  //   const text = readInput();

  let f1Teams = [
    "Ferrari",
    "MacLaren",
    "Cadillac",
    "Red Bull",
    "Williams",
    "Mercedes",
  ];

  f1Teams.sort();

  console.log(f1Teams);
  console.log("F1");
  console.log("WE");
  console.log("ARE");
  console.log("THE");
  console.log("BEST!!!");

  //   const input = document.createElement("input");
}

main();
