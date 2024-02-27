import * as fs from "fs";

const path = "./languages";

export function getLanguagePath(l) {
  if (!l) {
    return "english";
  }

  const p = parseLanguageDir(l.toLowerCase());
  if (!p) {
    console.error(`Language "${l}" not currently supported.`);
    process.exit(1);
  }
  return p;
}

function parseLanguageDir(l) {
  const files = fs.readdirSync(path);
  return files.find((filename) => filename.includes(l));
}
