// const fs = require("fs");

const inputhej = document.querySelector(".input-hej");
const button = document.querySelector("#btn");
const p = document.querySelector(".info");

// function readInput() {
//   const args = process.argv.slice(2);
//   if (args.length > 0) {
//     return args.join(" ");
//   }

//   const data = fs.readFileSync(0, "utf8");
//   return data.replace(/\r?\n/g, " ");
// }

// function splitIntoWords(text) {
//   // TODO: handle multiple spaces, punctuation, and case normalization.
//   return text.split(" ");
// }

// function countUnique(words) {
//   // TODO: ignore empty tokens and handle case-insensitive counting.
//   return new Set(words).size;
// }

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

  button.addEventListener("click", () => {
    console.log("hej");
    if (inputhej.value === "") {
      alert("fill in input");
      return;
    }

    p.innerText = inputhej.value.toLowerCase();
  });
}

main();
