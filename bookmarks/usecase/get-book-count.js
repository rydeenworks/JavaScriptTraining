import * as fs from "node:fs";

export function handle(filepath) {
  const file = fs.readFileSync(filepath, { encoding: "utf-8" });
  const lines = file.split(/\r?\n/);
  const bookLines = [];
  for (const line of lines) {
    if (line.trimStart().startsWith("<DT><A HREF=\"https://www.amazon.co.jp/")) {
      bookLines.push(line);
    }
  }

  return bookLines.length;
};