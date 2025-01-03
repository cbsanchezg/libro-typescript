let persona = { nombres:"Carlos", edad:41 }
console.log(persona.propertyIsEnumerable("nombres"));    // true
console.log(persona.propertyIsEnumerable("genero"));     // false