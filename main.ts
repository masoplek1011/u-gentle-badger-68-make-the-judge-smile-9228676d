// Writes one line about a small good thing that happened today
// to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt if unset).
// Node 22 stdlib only. Deterministic: no Date, no randomness,
// no network, no environment input beyond the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This afternoon, the woman next door, who has never once spoken to me, left a single orange on my step, and I ate it sitting right there on the stairs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
