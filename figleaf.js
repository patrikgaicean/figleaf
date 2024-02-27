import { getLanguagePath } from "./languages.js";
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
    // check if path is a valid file
    const l = getLanguagePath(opts.language);
    break;
  }
  case false: {
    console.log("not from file");
    const l = getLanguagePath(opts.language);
    break;
  }
}
