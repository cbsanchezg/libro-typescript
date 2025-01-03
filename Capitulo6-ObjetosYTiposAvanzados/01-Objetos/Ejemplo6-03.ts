enum Genero {"Masculino", "Femenino"};
type datosPersonales = {
  nombres:string,
  apellidos:string,
  edad:number,
  nacimiento:Date,
  genero:Genero
}
var persona:datosPersonales;  // Declaración del objeto como tipo de dato
persona={
     nombres:"Carlos", 
     apellidos:"Sanchez", 
     edad:41, 
     nacimiento:new Date("05/22/1981"), 
     genero:Genero.Masculino
};
console.log(persona);
/* {
  "nombres": "Carlos",
  "apellidos": "Sanchez",
  "edad": 41,
  "nacimiento": "1981-05-22T05:00:00.000Z",
  "genero": 0
} */