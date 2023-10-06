use neon::prelude::*;

mod rand;

#[neon::main]
fn init(mut cx: ModuleContext) -> NeonResult<()> {
	let cx = &mut cx;

	let exports = cx.exports_object()?;

	let h = JsFunction::new(cx, h)?;
	exports.set(cx, "h", h)?;

	let random = JsFunction::new(cx, rand::random)?;
	exports.set(cx, "random", random)?;

	Ok(())
}

fn h(mut cx: FunctionContext) -> JsResult<JsString> {
	let cx = &mut cx;

	Ok(JsString::new(cx, canni_command_parser::h()))
}
