import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const publicTextFiles = [];

function walk(directory) {
  for (const name of readdirSync(directory)) {
    const fullPath = join(directory, name);
    if (statSync(fullPath).isDirectory()) walk(fullPath);
    else if ([".ts", ".tsx", ".html", ".svg", ".css"].includes(extname(fullPath))) {
      publicTextFiles.push(fullPath);
    }
  }
}

walk(join(root, "src"));
publicTextFiles.push(join(root, "index.html"), join(root, "public", "assets", "og-card.svg"));

const joined = publicTextFiles.map((path) => readFileSync(path, "utf8")).join("\n");
const projects = readFileSync(join(root, "src", "data", "projects.ts"), "utf8");

assert.doesNotMatch(joined, /[Ââ]/u, "Public source contains mojibake markers");
assert.doesNotMatch(joined, /Agentic Temporal RAG|QLoRA|Outlier|Babel Audio|Available immediately|minimum six-month commitment|8\.96\/10|IELTS\s*6\.5|240 pages|>99%|7,833,706|~15 min|(?:\+?84\s*)?815[\s.-]*180[\s.-]*935|tel:/u, "Public source contains a blocked, private, or unresolved claim");
assert.match(joined, /nttkien080925@gmail\.com/u, "Approved public email is missing");
assert.match(joined, /Ho Chi Minh City/u, "Approved public location is missing");
assert.match(joined, /GPA: 9\.003\/10 \(3\.842\/4\.0\)/u, "Current GPA is missing");
assert.match(joined, /2023-2027/u, "Approved education period is missing");
assert.match(joined, /one of two recipients/u, "Approved scholarship cohort wording is missing");
assert.equal((projects.match(/^\s+id: "/gm) ?? []).length, 11, "Exactly eleven project objects must be present");
assert.equal((projects.match(/featured: true/g) ?? []).length, 4, "Exactly four projects must be featured");
for (const id of ["deepseek-ocr", "historical-ocr", "legal-graph", "spendsense"]) {
  const block = projects.match(new RegExp(`id: "${id}"[\\s\\S]*?(?=\\n  \\{|\\n\\];)`))?.[0] ?? "";
  assert.match(block, /featured: true/, `${id} must be featured`);
}
assert.match(projects, /38\.49% -> 12\.15% \(-68\.4% relative\)/, "DeepSeek metric mismatch");
assert.match(projects, /8,687 aligned lines from 235 source page images/, "Historical OCR count mismatch");
assert.match(projects, /7,833,848 node-export rows \/ 19,994,844 relationship-export rows/, "Legal export count mismatch");
assert.match(projects, /https:\/\/github\.com\/4-useless-student\/Spend-Sense-AI/, "SpendSense canonical link mismatch");
for (const status of [
  "Completed contribution - team coursework",
  "Team contribution - working course prototype",
  "Team contribution - working prototype",
  "Team contribution - completed coursework"
]) {
  assert.match(projects, new RegExp(status), `Missing controlled project status: ${status}`);
}
for (const [id, status] of [
  ["historical-ocr", "Completed contribution - team coursework"],
  ["legal-graph", "Team contribution - working course prototype"],
  ["spendsense", "Team contribution - working prototype"],
  ["weather-monitor", "Team contribution - working prototype"],
  ["vietsport", "Team contribution - completed coursework"]
]) {
  const block = projects.match(new RegExp(`id: "${id}"[\\s\\S]*?(?=\\n  \\{|\\n\\];)`))?.[0] ?? "";
  assert.match(block, new RegExp(status), `${id} controlled status mismatch`);
}
assert.doesNotMatch(joined, /NguyenTranTrungKien_AI_ML_Research_CV\.pdf/u, "Legacy public CV asset must remain unlinked pending replacement approval");
assert.doesNotMatch(joined, /NguyenTranTrungKien_(?:AI_ML_Public_2026-07-21|AI_Engineer_Public_2026-07-27)\.pdf/u, "Superseded public CV asset must not remain linked");
const profile = readFileSync(join(root, "src", "data", "profile.ts"), "utf8");
const cvPath = profile.match(/export const publicCvPath = "(\/assets\/[^"]+\.pdf)";/u)?.[1];
assert.ok(cvPath, "Current public CV path is missing");
const cvFile = join(root, "public", cvPath.slice(1));
assert.ok(existsSync(cvFile), "Current public CV asset is missing");
assert.equal(readFileSync(cvFile).subarray(0, 5).toString("ascii"), "%PDF-", "CV asset must be a PDF");

const ogPath = join(root, "public", "assets", "og-card.png");
assert.ok(existsSync(ogPath), "1200x630 OG PNG is missing");
const png = readFileSync(ogPath);
assert.equal(png.readUInt32BE(16), 1200, "OG PNG width must be 1200");
assert.equal(png.readUInt32BE(20), 630, "OG PNG height must be 630");

console.log(`Profile validation passed (${publicTextFiles.length} public text files).`);
