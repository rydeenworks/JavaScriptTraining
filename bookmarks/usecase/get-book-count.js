import * as fs from "node:fs";
import * as googleChromeBookmark from "../domain/google-chrome-bookmark.js"

export function handle(filepath) {
  const file = fs.readFileSync(filepath, { encoding: "utf-8" });
  const lines = file.split(/\r?\n/);
  const bookmarkAnchorTags = googleChromeBookmark.getBookmarkAnchorTags(lines)
  return bookmarkAnchorTags.length;
};