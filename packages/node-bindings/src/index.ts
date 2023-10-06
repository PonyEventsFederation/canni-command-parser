import create_native from "../native/index.mjs";
import type { NativeExports } from "../native/index.mjs";

let _path: string | undefined = undefined;
let _native: NativeExports | undefined = undefined;

/**
 * note: MUST BE CALLED before using any of the other functions for this to take effect
 */
export function set_native_path(path: string) {
	_path = path;
}

function get_native() {
	return _native ?? create_native(_path);
}

export function h() {
	return get_native().h();
}

export function random() {
	return get_native().random(0, 1, true);
}

export function random_from_interval(min: number, max: number, precise = false) {
	return get_native().random(min, max, precise);
}
