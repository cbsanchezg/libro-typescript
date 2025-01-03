let persona = { nombres:"Carlos", edad:41 }
let docs={pasaporte:"43425234"}
let proto=Object.setPrototypeOf(docs, persona);
console.log(Object.hasOwn(proto, "pasaporte")); //true
console.log(Object.hasOwn(proto, "nombres"));   //false