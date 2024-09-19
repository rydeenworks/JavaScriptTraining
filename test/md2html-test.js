import { test } from "node:test";
import * as assert from "node:assert";
import * as fs from "node:fs/promises";
import { md2html } from "../sample/md2html.js";

test("converts Markdown to HTML (GFM=false)", async () => {
  const sample = await fs.readFile("test/fixtures/sample.md", {
    encoding: "utf-8",
  });
  const expected = await fs.readFile("test/fixtures/expected.html", {
    encoding: "utf-8",
  });
  assert.strictEqual(
    md2html(sample, { gfm: false }).trimEnd(),
    expected.trimEnd(),
  )
});