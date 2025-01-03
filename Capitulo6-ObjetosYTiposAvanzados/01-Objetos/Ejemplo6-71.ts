let persona = { nombres:"Carlos", edad:41 }
let docs = { pasaporte:"43425234" }
let proto=Object.setPrototypeOf(docs, persona);
console.log(proto.pasaporte);   // "43425234"
console.log(proto.nombres);     // "Carlos"
console.log(proto.edad);        // 41