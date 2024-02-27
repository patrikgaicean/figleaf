import { Command } from "commander";
export const program = new Command();

program.name("figleaf").description("CLI slur censor utility");

program.option("-f, --file <path>", "Use file at <path> as input");

program.option("-l, --language <name>", "Use chosen language to parse input");

program.parse();
