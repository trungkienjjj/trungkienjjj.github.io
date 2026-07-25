import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const projects = readFileSync(resolve(root, "src/data/projects.ts"), "utf8");
const index = readFileSync(resolve(root, "index.html"), "utf8");
const hero = readFileSync(resolve(root, "src/components/Hero.tsx"), "utf8");
const app = readFileSync(resolve(root, "src/App.tsx"), "utf8");
const nav = readFileSync(resolve(root, "src/components/Nav.tsx"), "utf8");
const motion = readFileSync(resolve(root, "src/motion/MotionPreferences.tsx"), "utf8");

test("featured project slate is evidence-aligned", () => {
  assert.equal((projects.match(/featured: true/g) ?? []).length, 4);
  for (const id of ["deepseek-ocr", "historical-ocr", "legal-graph", "spendsense"]) {
    assert.match(projects, new RegExp(`id: "${id}"[\\s\\S]*?featured: true`));
  }
});

test("public metadata uses PNG social card and approved contact policy", () => {
  assert.match(index, /assets\/og-card\.png/);
  assert.match(index, /"email": "mailto:nttkien080925@gmail\.com"/);
  assert.match(index, /"addressLocality": "Ho Chi Minh City"/);
  assert.doesNotMatch(index, /(?:\+?84\s*)?815[\s.-]*180[\s.-]*935|tel:/);
});

test("CV call to action uses the separate public-safe asset and not the held legacy asset", () => {
  assert.match(hero, /\/assets\/NguyenTranTrungKien_AI_ML_Public_2026-07-21\.pdf/);
  assert.match(hero, /\bdownload\b/);
  assert.doesNotMatch(hero, /NguyenTranTrungKien_AI_ML_Research_CV\.pdf/);
});

test("keyboard navigation retains a focusable skip target and Escape menu handling", () => {
  assert.match(app, /<main id="main" tabIndex=\{-1\}>/);
  assert.match(nav, /event\.key === "Escape"/);
  assert.match(nav, /aria-controls="primary-navigation"/);
});

test("reduced-motion QA override uses the same application fallback", () => {
  assert.match(motion, /new URLSearchParams\(window\.location\.search\)\.get\("motion"\) === "reduce"/);
  assert.match(motion, /document\.documentElement\.dataset\.motion/);
});

test("conservative metrics and canonical SpendSense URL are preserved", () => {
  assert.match(projects, /38\.49% -> 12\.15% \(-68\.4% relative\)/);
  assert.match(projects, /235 source page images/);
  assert.match(projects, /7,833,848 node-export rows/);
  assert.match(projects, /github\.com\/4-useless-student\/Spend-Sense-AI/);
  assert.match(
    projects,
    /id: "vietsport"[\s\S]*?type: "Team contribution - completed coursework"/
  );
});
