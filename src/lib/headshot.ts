import fs from "node:fs";
import path from "node:path";
import { HEADSHOT } from "@/data/site";

/** Build-time: returns the first headshot file that exists in public/, or null (monogram is shown). */
export function getHeadshot() {
  for (const src of HEADSHOT.candidates) {
    if (fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")))) return { src, alt: HEADSHOT.alt };
  }
  return null;
}
