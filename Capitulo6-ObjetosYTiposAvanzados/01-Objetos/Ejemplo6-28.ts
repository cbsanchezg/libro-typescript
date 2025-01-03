let persona = { nombres:"Carlos", edad:41, mensaje:"" }
Object.defineProperty(persona, "mensaje", 
    { 
      set: function(msg) {
        this.nombres="Hola "+msg;
      }
    }
);
console.log(persona.nombres);   // Carlos
persona.mensaje="Daniela";
console.log(persona.nombres);   // Hola Daniela