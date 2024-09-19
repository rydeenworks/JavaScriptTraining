import { test } from "node:test";
import * as assert from "node:assert";
import * as getBookCount from "../../bookmarks/get-book-count.js";

test("get book count from bookmarks.html file", async () => {
  const expected = 4;
  const actural = getBookCount.handle("test/bookmarks/sample_bookmarks.html");
  assert.strictEqual(actural, expected);
});