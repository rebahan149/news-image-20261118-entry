import { copyFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Put the finished front-page image where the grader expects it.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

copyFileSync(source, target);
const size = statSync(target).size;
console.log(`Daily Compass front page copied to ${target} (${size} bytes)`);
