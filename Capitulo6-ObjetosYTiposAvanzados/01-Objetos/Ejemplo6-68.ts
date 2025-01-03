let persona = { nombres:"Carlos", edad:41 }
Object.preventExtensions(persona);
Object.setPrototypeOf(persona, null);
//Error: Cannot define property genero, object is not extensible