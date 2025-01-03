var a = Symbol.for("id1");
var b = Symbol.for("id2");
console.log(a);                     // Symbol(id1) 
console.log(b);                     // Symbol(id2) 
console.log(Symbol.keyFor(a));      // id1
console.log(Symbol.keyFor(b));      // id2