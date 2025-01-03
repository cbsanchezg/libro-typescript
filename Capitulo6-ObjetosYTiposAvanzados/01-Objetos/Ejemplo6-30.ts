let persona = { nombres:"Carlos", edad:41 }
let doctor = {licencia:"43425234"}
let proto = Object.setPrototypeOf(doctor, persona);
console.log(proto);          // { "licencia": "43425234" }
console.log(proto.nombres);  // "Carlos"
console.log(Object.getPrototypeOf(proto));  //{ "nombres": "Carlos", "edad":42}
console.log(persona);  // { "nombres": "Carlos", "edad":41 }
console.log(doctor);   // { "nombres": "Daniela", "edad":42, "licencia": "43425234" }