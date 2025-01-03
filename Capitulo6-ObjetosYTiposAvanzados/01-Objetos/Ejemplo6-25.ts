let persona = { nombres:"Carlos", edad:41 }
Object.defineProperty(persona,
    "nombres", {configurable: false}
);
Object.defineProperty(persona,      // Error
    "nombres", {enumerable: false}
);