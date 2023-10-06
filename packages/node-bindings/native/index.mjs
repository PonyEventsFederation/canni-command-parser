import { createRequire } from "module";

const require = createRequire(import.meta.url);
export default path => {
	let env_var = process.env["CANNI_COMMAND_PARSER_NATIVE_PATH"];
	let required_path = env_var
		? env_var
		: (path ?? "../build/canni-command-parser.node");
	return require(required_path)
};
