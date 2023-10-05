import fs from "fs";

// if `noPostinstall` doesn't exist anymore, meaning downstream package deleted it using
// .pnpmfile.cjs or similar, so we crash so the `||` shell operator runs the real
// postinstall script
if (!JSON.parse(fs.readFileSync("./package.json", "utf8")).noPostinstall) {
	process.exit(1);
}
