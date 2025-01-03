function imprimeThis() { console.log(this); }
var Persona={nombre:"Daniela", mensaje: imprimeThis}
Persona.mensaje(); // { "nombre": "Daniela" }