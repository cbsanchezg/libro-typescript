type persona = {           // Creacion de Alias
    codigo:number, 
    nombre: string,
    edad: number
};
var aux:persona;                              // Declaración de Variable
aux={ nombre:"Carlos", edad:41,  codigo:9721} // Inicializacion de Variable            
console.log(aux);
/*
{
  "nombre": "Carlos",
  "edad": 41,
  "codigo": 9721
} 
*/