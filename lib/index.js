import * as util from "node:util";
import * as fs from "node:fs/promises";
import { marked } from "marked";

const {
  positionals
} = util.parseArgs({
  allowPositionals: true
});

const filepath = positionals[0];
fs.readFile(filepath, { encoding: "utf8" }).then(file => {
  const html = marked.parse(file);
  console.log(html);
}).catch(err => {
  console.error(err.message);
  process.exit(1);
});
