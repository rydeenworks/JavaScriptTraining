import { Book } from "../domain/book.js"
import * as parseGoogleChromeBookmark from "../domain/parse-google-chrome-bookmark.js"

export function handle(bookmarkHtml) {
  const bookmark = parseGoogleChromeBookmark.handle(bookmarkHtml);
  return new Book(bookmark.title, bookmark.url);
}