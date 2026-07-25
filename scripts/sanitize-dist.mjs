import assert from "node:assert/strict";
import { existsSync, unlinkSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const distAssets = resolve(root, "dist", "assets");
const heldLegacyCv = resolve(distAssets, "NguyenTranTrungKien_AI_ML_Research_CV.pdf");

assert.equal(dirname(heldLegacyCv), distAssets, "Held asset target escaped dist/assets");

if (existsSync(heldLegacyCv)) {
  unlinkSync(heldLegacyCv);
}

assert.equal(existsSync(heldLegacyCv), false, "Held legacy CV remained in production output");
console.log("Production output excludes the held legacy public CV asset.");
