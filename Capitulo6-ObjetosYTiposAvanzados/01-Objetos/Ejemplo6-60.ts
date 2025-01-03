let persona1 = { nombres:"Carlos", edad:41 }
let persona2 = { nombres:"Carlos", edad:41 }
console.log(Object.is(persona1, persona1));   // true
console.log(Object.is(persona1, persona2));   // false
console.log(Object.is(persona1, persona2));   // false