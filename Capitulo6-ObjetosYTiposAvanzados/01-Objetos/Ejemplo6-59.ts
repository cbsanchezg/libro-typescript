var proto1={ "nombres":String, "edad":Number};
var proto2={ "nombres":String, "apellidos":String};
var a=Object.create(proto1);
var b=Object.create(proto1);
var c=Object.create(proto2);
console.log(Object.is(a, b));   // false
console.log(Object.is(b, c));   // false