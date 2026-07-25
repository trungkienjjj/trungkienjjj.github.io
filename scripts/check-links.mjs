import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const files = [join(root, "index.html")];
const extensions = new Set([".ts", ".tsx", ".html"]);

function walk(directory) {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (extensions.has(extname(path))) files.push(path);
  }
}
walk(join(root, "src"));

const content = files.map((path) => readFileSync(path, "utf8")).join("\n");
const rawLinks = [...content.matchAll(/(?:href=|href:\s*)["']([^"'#][^"']*)["']/g)].map((match) => match[1]);
const links = [...new Set(rawLinks)];
const failures = [];

for (const link of links.filter((value) => value.startsWith("/"))) {
  const candidate = join(root, "public", link.replace(/^\//, ""));
  if (!existsSync(candidate)) failures.push(`Missing internal asset: ${link}`);
}

if (process.argv.includes("--external")) {
  for (const link of links.filter((value) => /^https?:\/\//.test(value))) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
      const request = {
        redirect: "follow",
        signal: controller.signal,
        headers: { "user-agent": "Mozilla/5.0 profile-rebuild-link-check" }
      };
      let response = await fetch(link, { ...request, method: "HEAD" });
      if (response.status === 404 || response.status === 405) {
        response = await fetch(link, { ...request, method: "GET" });
      }
      if (response.ok || (response.status >= 300 && response.status < 400)) {
        console.log(`OK ${response.status} ${link}`);
      } else if ([403, 429, 999].includes(response.status)) {
        console.warn(`INDETERMINATE ${response.status} ${link}`);
      } else {
        failures.push(`HTTP ${response.status}: ${link}`);
      }
    } catch (error) {
      failures.push(`FETCH ${error.name}: ${link}`);
    } finally {
      clearTimeout(timer);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Link check passed (${links.length} unique links).`);
}
