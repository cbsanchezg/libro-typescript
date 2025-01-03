let persona1 = { nombres:"Carlos", edad:41 }
let persona2 = { nombres:"Daniela", edad:42 }
let persona3 = { nombres:"Camila", edad:13 }
Object.preventExtensions(persona1);
Object.freeze(persona2);
console.log(Object.isFrozen(persona1));   // false
console.log(Object.isFrozen(persona2));   // true
console.log(Object.isFrozen(persona3));   // true