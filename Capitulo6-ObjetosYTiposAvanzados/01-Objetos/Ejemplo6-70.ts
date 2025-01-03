let persona = { nombres:"Carlos", edad:41 }
Object.preventExtensions(persona);
Object.setPrototypeOf(persona, null);
Object.defineProperty(persona, 'genero', {value: "Masculino"});
// #<Object> is not extensible