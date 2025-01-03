let persona = { nombres:"Carlos", edad:41 }
let docs={pasaporte:"43425234"}
let proto=Object.setPrototypeOf(docs, persona);
console.log("pasaporte" in proto);  // true
console.log("nombres" in proto);    // true
console.log("toString" in proto);   // true
console.log("toStringX" in proto);  // false