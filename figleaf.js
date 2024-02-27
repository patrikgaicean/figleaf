import { program } from "./program.js";

const opts = program.opts();
if (opts.file === undefined) {
  console.log("not from file");
} else {
  console.log("from file:", opts.file);
}
