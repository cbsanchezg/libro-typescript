enum Genero {'Masculino', 'Femenino'};
var persona = {
  nombres:String,
  apellidos:String,
  edad:number,
  nacimiento:Date,
  genero:Genero
}
console.log(persona);
/*
{
  "genero": {
    "0": "Masculino",
    "1": "Femenino",
    "Masculino": 0,
    "Femenino": 1
  }
}
*/