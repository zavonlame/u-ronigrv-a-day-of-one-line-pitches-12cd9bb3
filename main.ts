// A Day of One-Line Pitches (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
//
// Self-contained copy program: Node 22 stdlib only, no network, no
// child_process, no headless Chrome (the grader has no Chrome binary).
// Writes the one-sentence pitch in entry.txt to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output), byte for byte, so the gate sees exactly 235 chars.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Gate check: the entry must be 1-240 characters of non-whitespace text.
const text = readFileSync(join(here, "entry.txt"), "utf8");
if (text.length < 1 || text.length > 240 || text.trim().length === 0) {
  throw new Error(`entry.txt fails the gate: ${text.length} characters`);
}
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
