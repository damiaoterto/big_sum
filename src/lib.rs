#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use napi::bindgen_prelude::*;
use rayon::prelude::*;

#[napi]
pub fn sum_array(arr: Buffer) -> f64 {
  let numbers = arr.as_ref();
  let slice: &[f64] = unsafe {std::slice::from_raw_parts(numbers.as_ptr() as *const f64, numbers.len() / 8)};
  slice.par_iter().sum()
}
