import assert from "node:assert/strict";
import { existsSync, unlinkSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const distAssets = resolve(root, "dist", "assets");
const heldAssets = [
  resolve(distAssets, "NguyenTranTrungKien_AI_ML_Research_CV.pdf"),
  resolve(distAssets, "NguyenTranTrungKien_AI_ML_Public_2026-07-21.pdf"),
  resolve(distAssets, "NguyenTranTrungKien_AI_Engineer_Public_2026-07-27.pdf")
];

for (const heldAsset of heldAssets) {
  assert.equal(dirname(heldAsset), distAssets, "Held asset target escaped dist/assets");
  if (existsSync(heldAsset)) unlinkSync(heldAsset);
  assert.equal(existsSync(heldAsset), false, "Held legacy CV remained in production output");
}

console.log("Production output excludes legacy CV assets.");
