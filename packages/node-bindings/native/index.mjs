import { createRequire } from "module";

const require = createRequire(import.meta.url);
export default (path) => require(
	path
		? path
		: (process.env["CANNI_COMMAND_PARSER_NATIVE_PATH"] ?? "../build/canni-command-parser.node")
);
