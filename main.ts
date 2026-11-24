import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const pitch = "LiftLedger is the wellness app for tenants riding from the lobby to floor 3: it counts the 42 stairs the elevator spared them, then invoices the lift monthly for their unearned cardio, payable in applause.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "entry.txt"), pitch, "utf8");
