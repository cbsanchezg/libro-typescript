function imprime() { console.log("Mi nombre es: "+this.nombre); }
var Persona={nombre:"Daniela", mensaje: imprime}
Persona.mensaje(); // "Mi nombre es: Daniela"