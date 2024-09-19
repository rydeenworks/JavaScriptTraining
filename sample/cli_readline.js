// CommonJS記法
//const readline = require("readline");
// ECMAScript記法
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter names for your project: ", answer => {
  console.log(`Thank you!! Let's start ${answer}`);
  rl.close();
});