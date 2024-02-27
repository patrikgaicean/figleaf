import { Command } from "commander";
const program = new Command();

program.name("figleaf").description("CLI slur censor utility");

program.option("-f, --file <path>", "Use file as input");

program.parse();

const opts = program.opts();
if (opts.file === undefined) {
  console.log("not from file");
} else {
  console.log("from file:", opts.file);
}
