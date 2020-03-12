let a = {
  b: 1,
  c: 2,
  d: 3,
  e: null, /*z.x*/
}

let z = {
  y: 10,
  x: 9,
  w: 8,
  v: a.d
}

a.e = z.x;

console.log(a.e)
