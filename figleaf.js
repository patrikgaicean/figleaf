import { program } from "./program.js";

const opts = program.opts();
const isFile = opts.file !== undefined;

switch (isFile) {
  case true: {
    if (program.args.length > 0) {
      console.error("Can't accept text string if --file option was provided.");
      break;
    }
    console.log("from file:", opts.file);
    break;
  }
  case false: {
    console.log("not from file");
    break;
  }
}
