let persona = { nombres:"Carlos", edad:41 }
Object.defineProperty(persona,
    "nombres", {writable: false}
);
persona.nombres="Daniela";     // Error
console.log(persona.nombres)