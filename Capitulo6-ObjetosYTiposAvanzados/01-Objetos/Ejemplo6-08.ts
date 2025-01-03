type datosPersonales = {
  nombres:string,
  edad:number
}
var persona:datosPersonales;  
persona={nombres:"Carlos", edad:41}; 
persona['nombres']="Daniela";
console.log(persona);    
/*
{
  "nombres": "Daniela",
  "edad": 41
} 
*/