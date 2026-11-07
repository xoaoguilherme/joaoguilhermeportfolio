import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "dist");
const relativeOut = path.relative(root, out);
if (relativeOut !== "dist" || path.resolve(out) === root) {
  throw new Error("Diretório de saída inesperado.");
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const file of ["index.html", "styles.css", "script.js"]) {
  await cp(path.join(root, file), path.join(out, file));
}
await cp(path.join(root, "assets"), path.join(out, "assets"), {
  recursive: true,
});
console.log(`Site pronto em ${out}`);
