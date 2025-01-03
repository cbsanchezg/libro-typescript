let persona = { nombres:"Carlos", edad:41 }
let proto=Object.getPrototypeOf(persona);
console.log(proto.isPrototypeOf(persona));     // true