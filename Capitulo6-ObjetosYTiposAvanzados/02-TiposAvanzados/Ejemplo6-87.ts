type persona = {
    codigo:number, 
    nombre: string; 
    edad: number; 
    genero:"masculino" | "femenino"; 
};
type documentos = { pasaporte: string; codigo:number};
var aux:persona & documentos;           // Declaración de Tipo Intersection
aux={                                  
    nombre:"Carlos", 
    edad:41, 
    genero:"masculino", 
    pasaporte:"23423", 
    codigo:9721
}
console.log(aux);
/*
{
  "nombre": "Carlos",
  "edad": 41,
  "genero": "masculino",
  "pasaporte": "23423",
  "codigo": 9721
} 
*/