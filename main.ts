// One Word for the Boss — entry: "Ghoster" (7 chars, one word).
// A boss who vanishes the moment you need an answer, then reappears
// only to ask why nothing moved. Funny on its own, true in any office,
// fresh (not the first word anyone reaches for), and it travels.
// Revision: header comment clarified; entry word unchanged.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "Ghoster\n", "utf8");
