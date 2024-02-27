import { Command } from "commander";
export const program = new Command();

program.name("figleaf").description("CLI slur censor utility");

program.option("-f, --file <path>", "Use file as input");

program.parse();
