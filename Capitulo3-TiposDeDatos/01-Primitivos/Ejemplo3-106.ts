var a = Symbol("id1");
var b = Symbol(1);
var c = Symbol();
console.log(a==b);        // false
console.log(b==c);        // false
console.log(a==c);        // false