enum Genero {"Masculino", "Femenino"};
type datosPersonales = {
    nombres:string,
    apellidos:string | null,
    edad:number,
    nacimiento:Date | null,
    genero:Genero | null
}
var persona:datosPersonales;  
persona={
    nombres:"Carlos", 
    apellidos:null, 
    edad:41, 
    nacimiento:null, 
    genero:null};
console.log(persona);
/*
{
  "nombres": "Carlos",
  "apellidos": null,
  "edad": 41,
  "nacimiento": null,
  "genero": null
}
*/