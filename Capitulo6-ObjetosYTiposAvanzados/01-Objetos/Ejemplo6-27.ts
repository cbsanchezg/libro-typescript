let persona = { nombres:"Carlos", edad:41, mensaje:null }
Object.defineProperty(persona, "mensaje", 
    { 
      get: function() {
        return "Mi nombre es: "+this.nombres;
      }
    }
);
console.log(persona.mensaje); // "Mi nombre es: Carlos"