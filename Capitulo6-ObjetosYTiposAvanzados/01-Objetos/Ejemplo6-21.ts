let persona = { nombres:"Carlos", edad:41 }
Object.defineProperty(persona,
    "nombres", {value: "Daniela"}
);
console.log(persona.nombres);  // "Daniela"