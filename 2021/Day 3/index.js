const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf-8").split("\n");

// Part 1
// https://adventofcode.com/2021/day/3

let collector = [];

// Make array of arrays, collecting values of like-index
data.forEach((binary, i) => {
  [...binary].forEach((num, i) => {
    if (collector[i]) {
      collector[i].push(Number(num));
    } else {
      collector.push([Number(num)]);
    }
  });
});

// Add up each index
const sums = collector.map((item) => {
  return item.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
});

// Calculate Gamma
// If "1" is more common, sum should be greater than half length
const gamma = sums
  .map((sum) => {
    return sum > data.length / 2 ? 1 : 0;
  })
  .join("");

// Calculate Epsilon
// Inverse of Gamma
const epsilon = [...gamma]
  .map((num) => {
    return num === "1" ? 0 : 1;
  })
  .join("");

// Calculate Power
const power = parseInt(gamma, 2) * parseInt(epsilon, 2);

// console.log("--- PART 1 ---");
// console.log("Gamma: ", gamma);
// console.log("Epsilon: ", epsilon);
// console.log("Power: ", power);

// Part Two
// https://adventofcode.com/2021/day/3#part2
