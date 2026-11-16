import fs from "node:fs";
import path from "node:path";
import { RESUME } from "@/data/site";

/**
 * Build-time check: résumé buttons only render if public/resume.pdf exists.
 * Size is read from the file; the "Updated" label comes from RESUME.updated.
 */
export function getResume() {
  const file = path.join(process.cwd(), "public", RESUME.path.replace(/^\//, ""));
  if (!fs.existsSync(file)) return null;
  const bytes = fs.statSync(file).size;
  const size = bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return { href: RESUME.path, downloadName: RESUME.downloadName, meta: "PDF" };
}
