let persona1 = { nombres:"Carlos", edad:41 }
let persona2 = { nombres:"Daniela", edad:42 }
let persona3 = { nombres:"Taz", edad:13 }
let persona4 = { nombres:"Camila", edad:13 }
Object.seal(persona1)
Object.freeze(persona2);
Object.preventExtensions(persona3);
console.log(Object.isSealed(persona1));   // true
console.log(Object.isSealed(persona2));   // true
console.log(Object.isSealed(persona3));   // false
console.log(Object.isSealed(persona4));   // false