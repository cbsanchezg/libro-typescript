let persona = { nombres:"Carlos", edad:41 }
Object.defineProperty(persona,
    “nombres", {configurable: false}
);
delete persona.nombres;  // Error