// The Absurd Clause Contest — u-donrulezz-the-absurd-clause-contest-035cc0f1
// One original English sentence, phrased as a clause buried deep inside a
// terms-of-service agreement: deadpan legal boilerplate that quietly turns
// absurd. Writes the clause to /output/entry.txt (the gate: 1-200 chars,
// UTF-8, not only whitespace).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "By using the Service, you grant us a perpetual, royalty-free licence to your shadow, including any future shadows, reflections, or silhouettes you may acquire.";

// The gate counts characters: the entry must be 1-200 chars and a single
// sentence. Fail loudly here rather than shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, gate requires 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
