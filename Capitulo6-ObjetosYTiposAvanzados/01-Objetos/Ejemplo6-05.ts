enum Genero {"Masculino", "Femenino"};
type datosPersonales = {
  nombres:string,
  apellidos?:string,    // No es obligatorio
  edad:number,
  nacimiento?:Date,     // No es obligatorio
  genero?:Genero        // No es obligatorio
}
var persona:datosPersonales;  // Declaración del objeto como tipo de dato
persona={nombres:"Carlos", edad:41};
console.log(persona);
/* {
  "nombres": "Carlos",
  "edad": 41,
} */