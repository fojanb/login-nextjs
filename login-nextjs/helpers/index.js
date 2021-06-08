export function isTypeEqual(leftInp, rightInpt) {
  return trueTypeOf(leftInp) === trueTypeOf(rightInpt);
}

export function trueTypeOf(inp) {
  return Object.prototype.toString.call(inp).slice(8, -1).toLowerCase();
}
