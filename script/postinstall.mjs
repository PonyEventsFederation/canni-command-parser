import cp from "child_process";

if (process.env["npm_config_canni_command_parser_run_install"] === "true") {
	let extra_args = process.env["npm_config_canni_command_parser_build_args"];
	let command = "cd packages/node-bindings && pnpm run build:release";
	if (extra_args) command = `${command} ${extra_args}`;
	cp.execSync(command);
}
