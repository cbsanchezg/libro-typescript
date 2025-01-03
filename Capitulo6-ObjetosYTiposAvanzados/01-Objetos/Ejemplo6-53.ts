var prototype1={ "nombres":String, "edad":Number};
var prototype2={ "nombres":String, "apellidos":String};
var a=Object.create(prototype1);
var b=Object.create(prototype1);
var c=Object.create(prototype2);
console.log(Object.getPrototypeOf(a)==Object.getPrototypeOf(b));   // true
console.log(Object.getPrototypeOf(c)==Object.getPrototypeOf(a));   // false