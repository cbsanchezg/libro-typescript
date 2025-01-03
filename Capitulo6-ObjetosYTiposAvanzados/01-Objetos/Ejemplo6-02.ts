enum Genero {'Masculino', 'Femenino'};
var persona = {
  nombres:'Carlos',
  apellidos:'Sanchez',
  edad:41,
  nacimiento:new Date('05/22/1981'),
  genero:Genero.Masculino 
}
console.log(persona);
/*
{
  "nombres": "Carlos",
  "apellidos": "Sanchez",
  "edad": 41,
  "nacimiento": "1981-05-22T05:00:00.000Z",
  "genero": 0
} 
*/