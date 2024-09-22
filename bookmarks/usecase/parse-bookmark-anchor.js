import { Book } from "../domain/book.js"
import * as parseGoogleChromeBookmark from "../domain/google-chrome-bookmark.js"

export function handle(bookmarkHtml) {
  const bookmark = parseGoogleChromeBookmark.parseAnchorTag(bookmarkHtml);
  return new Book(bookmark.title, bookmark.url);
}