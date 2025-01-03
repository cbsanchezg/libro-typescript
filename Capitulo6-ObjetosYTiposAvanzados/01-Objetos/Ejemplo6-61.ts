// Cero con signo
Object.is(0, -0);    // false
Object.is(0, +0);    // true
Object.is(+0, -0);   // false
Object.is(-0, -0);   // true
// Not a Number
Object.is(NaN, 0/0);         // true
Object.is(NaN, Number.NaN);  // true