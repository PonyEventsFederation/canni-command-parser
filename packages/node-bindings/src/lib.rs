use neon::prelude::*;

#[neon::main]
fn init(mut cx: ModuleContext) -> NeonResult<()> {
	let cx = &mut cx;

	let exports = cx.exports_object()?;

	let h = JsFunction::new(cx, h)?;
	exports.set(cx, "h", h)?;

	Ok(())
}

fn h(mut cx: FunctionContext) -> JsResult<JsString> {
	let cx = &mut cx;

	Ok(JsString::new(cx, canni_command_parser::h()))
}
