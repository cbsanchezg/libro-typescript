let persona1 = { nombres:"Daniela", edad:42 }
let persona2 = { nombres:"Camila", edad:13 }
Object.preventExtensions(persona1);
Object.freeze(persona2);
console.log(Object.isExtensible(persona1));   // false
console.log(Object.isExtensible(persona2));   // false