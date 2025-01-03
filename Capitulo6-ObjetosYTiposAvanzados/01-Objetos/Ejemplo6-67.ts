let persona = { nombres:"Carlos", edad:41 }
Object.preventExtensions(persona);
Object.defineProperty(persona, 'genero', {value: "Masculino"}); //
//Error: Cannot define property genero, object is not extensible