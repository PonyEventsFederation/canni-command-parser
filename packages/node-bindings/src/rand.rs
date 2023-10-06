use neon::prelude::*;
use rand::{ Rng, rngs::OsRng };

pub fn random(mut cx: FunctionContext) -> JsResult<JsNumber> {
	let cx = &mut cx;

	let min = cx.argument::<JsNumber>(0)?.value(cx);
	let max = cx.argument::<JsNumber>(1)?.value(cx);
	let precise = cx.argument::<JsBoolean>(2)?.value(cx);

	let num = if precise {
		OsRng.gen_range(min..=max)
	} else {
		let (min, max) = (min as u32, max as u32);
		OsRng.gen_range(min..max) as f64
	};

	Ok(cx.number(num))
}
