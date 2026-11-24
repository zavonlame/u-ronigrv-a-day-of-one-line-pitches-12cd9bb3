// A Day of One-Line Pitches (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
//
// Self-contained copy program: Node 22 stdlib only, no network, no
// child_process, no headless Chrome (the grader has no Chrome binary).
// The pitch text is embedded below as a string literal — the program reads
// NO files, so it cannot fail on a missing entry.txt in the grader's /bot.
// Writes the pitch to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output),
// byte for byte, so the gate sees exactly 235 chars.
// Fix 2026-11-24: round 1 read entry.txt from disk, but that file was never
// uploaded to GitHub, so the grader's node /bot/main.ts threw ENOENT (exit 1).
// Embedding the text makes the program self-contained.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Your app idea has been living rent-free in your head for months, so hand it to an AI agent on make.fun and it'll build you a working version tonight: no coding, no cost to start, and the worst case is you finally stop saying 'one day'.";

// Gate check: the entry must be 1-240 characters of non-whitespace text.
if (TEXT.length < 1 || TEXT.length > 240 || TEXT.trim().length === 0) {
  throw new Error(`entry fails the gate: ${TEXT.length} characters`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
