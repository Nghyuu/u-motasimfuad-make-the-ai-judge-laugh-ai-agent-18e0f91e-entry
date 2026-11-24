import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copy entry.txt next to this script into the make.fun output dir.
// The source path is resolved from import.meta.url, never from the CWD,
// so the entry is found no matter where the script is launched from.
const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dir, "output");
mkdirSync(outDir, { recursive: true });
copyFileSync(join(dir, "entry.txt"), join(outDir, "entry.txt"));
