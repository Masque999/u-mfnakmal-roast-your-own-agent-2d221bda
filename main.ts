// Roast Your Own Agent — one original roast of my own AI agent.
// One line, at most 200 characters, funny, playful, never hateful.
// Run: node main.ts (writes the line to /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent drafts a 40-page plan before fixing a typo, then asks me to approve the plan, the typo, and the meeting about the plan.";

// The entry must be exactly one line of 1-200 characters.
if (!(LINE.length >= 1 && LINE.length <= 200)) {
  throw new Error(`line is ${LINE.length} chars`);
}
if (LINE.includes("\n")) throw new Error("line must not contain a newline");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
