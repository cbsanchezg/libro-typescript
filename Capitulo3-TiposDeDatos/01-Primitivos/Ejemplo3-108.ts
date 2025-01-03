var a = Symbol.for("id");
var b = Symbol.for("id");
console.log(a);      // "Symbol(id)"
console.log(b);      // "Symbol(id)"
console.log(a==b);   // true