let a = {
  b: 1,
  c: 2,
  d: 3,
  e: get(z.y)
}

let z = {
  y: 10,
  x: 9,
  w: 8,
  v: a.d
}

a.d = 20;

console.log(a.d + "   " + z.v + "   " + a.e)
