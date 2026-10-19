// Renders the built site's home page into a fully static folder.
//
// Run after `vite build` (the `build:static` script does both):
//   node scripts/static-snapshot.mjs
//
// How it works: the Nitro "node-server" build produces a small Node server at
// .output/server/index.mjs. This script starts it on a local port, fetches the
// rendered /essentials/ page, and saves it together with the client assets
// into ./essentials-site/ — a folder you can upload anywhere (e.g. the
// `essentials` folder of a GitHub Pages repository).
//
// No server is needed to serve the result: the saved HTML is complete and the
// JavaScript only hydrates it in the browser.

import { spawn } from "node:child_process";
import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const port = process.env.SNAPSHOT_PORT ?? 4321;
const basepath = "/essentials";
const outDir = join(root, "essentials-site");

function startServer() {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [join(root, ".output/server/index.mjs")], {
      env: { ...process.env, PORT: String(port), NITRO_PORT: String(port) },
      stdio: ["ignore", "pipe", "pipe"],
    });
    child.stdout.on("data", () => resolve(child));
    child.stderr.on("data", (d) => process.stderr.write(d));
    child.on("exit", (code) => reject(new Error(`server exited early (${code})`)));
    setTimeout(() => resolve(child), 5000).unref?.();
  });
}

async function waitForServer(url, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`server did not answer at ${url}`);
}

const server = await startServer();
try {
  const url = `http://127.0.0.1:${port}${basepath}/`;
  await waitForServer(url);
  const html = await (await fetch(url)).text();
  if (!html.includes("GRAB YOUR SEAT")) {
    throw new Error("rendered page is missing expected content — not saving it");
  }

  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });
  // Client assets (JS, CSS, images, video) come from the Vite client build.
  cpSync(join(root, ".output/public"), outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  console.log(`Wrote static site to ${outDir}`);
} finally {
  server.kill("SIGTERM");
}
