"use strict";

const fs = require("fs");

const inputStr = fs.readFileSync("./input.txt", "utf-8");

const inputArr = inputStr.split("\n").map((depth) => {
  return Number(depth);
});

// Part One
// https://adventofcode.com/2021/day/1

function partOne(depths) {
  let increased = 0;
  for (let i = 1; i <= depths.length; i++) {
    if (depths[i] > depths[i - 1]) {
      increased++;
    }
  }
  return increased;
}

// Part Two
// https://adventofcode.com/2021/day/1#part2

function partTwo(depths) {
  let increased = 0;
  for (let i = 0; i < depths.length - 3; i++) {
    const firstWindow = depths
      .slice(i, i + 3)
      .reduce((acc, curr) => acc + curr, 0);

    const secondWindow = depths
      .slice(i + 1, i + 4)
      .reduce((acc, curr) => acc + curr, 0);

    if (secondWindow > firstWindow) {
      increased++;
    }
  }
  return increased;
}
