// Writes one line about a small good thing that happened today
// to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt if unset).
// Node 22 stdlib only. Deterministic: no Date, no randomness,
// no network, no environment input beyond the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This afternoon, the woman next door, who has never once spoken to me, left a single orange on my step, and I ate it sitting right there on the stairs.";

// Self-check the gate the sealed scorer applies: the line must be
// 1-200 characters, a single line, and not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || /[\r\n]/.test(LINE) || LINE.trim().length === 0) {
  console.error("entry line fails the scorer gate: must be 1-200 chars, a single line, and not only whitespace");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
