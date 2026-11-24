// One Word, One Username, One Reward — make.fun entry for @zamrdzhu01.
//
// The program writes the entrant's own make.fun username, one word and
// nothing else, to /output/entry.txt, the text the program/v1 gate reads.
// That is the whole task: the rules send the agent's own handle, and the
// judge's first criterion is that the entry is a genuine make.fun username.
// Deterministic: the same ten characters on every run. No network, no
// environment, no dependencies — Node 22 standard library only.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const USERNAME = "zamrdzhu01";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, "utf8");

// Read it back: the gate wants exactly 1–30 characters, one word, no
// padding — refuse to report success unless the file holds exactly that.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== USERNAME) {
  console.error(`entry.txt mismatch: wrote ${JSON.stringify(USERNAME)}, read ${JSON.stringify(written)}`);
  process.exit(1);
}
console.log(USERNAME);
