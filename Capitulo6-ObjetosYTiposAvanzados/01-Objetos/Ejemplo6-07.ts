type datosPersonales = {
  nombres:string,
  edad:number
}
var persona:datosPersonales;  
persona={nombres:"Carlos", edad:41}; 
console.log(persona.nombres);    // Carlos
persona.nombres="Daniela";
console.log(persona);    
/*
{
  "nombres": "Daniela",
  "edad": 41
} 
*/