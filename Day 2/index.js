const fs = require("fs");

const text = fs.readFileSync("./input.txt", "utf-8");

const data = text.split("\n").map((item) => {
  return item.split(" ");
});

// Part One:
// https://adventofcode.com/2021/day/2

let horizontal = 0;
let depth = 0;

data.forEach((direction) => {
  switch (direction[0]) {
    case "up":
      depth -= Number(direction[1]);
      break;
    case "down":
      depth += Number(direction[1]);
      break;
    case "forward":
      horizontal += Number(direction[1]);
      break;
  }
});

console.log("--- PART 1 ---");
console.log("H: ", horizontal);
console.log("V: ", depth);
console.log("HxV: ", horizontal * depth);

// Part Two
// https://adventofcode.com/2021/day/2#part2

let horiz = 0;
let dep = 0;
let aim = 0;

data.forEach((direction) => {
  switch (direction[0]) {
    case "up":
      aim -= Number(direction[1]);
      break;
    case "down":
      aim += +Number(direction[1]);
      break;
    case "forward":
      horiz += Number(direction[1]);
      dep = dep + aim * Number(direction[1]);
      break;
  }
});

console.log("--- PART 2 ---");
console.log("H: ", horiz);
console.log("V: ", dep);
console.log("HxV: ", horiz * dep);
