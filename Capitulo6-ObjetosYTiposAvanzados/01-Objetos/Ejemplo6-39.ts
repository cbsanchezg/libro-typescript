type Datos1 = {nombres:string}
type Datos2 = {codigo:number}
var origen:Datos1={nombres:'Carlos'};
var destino:Datos2={codigo:250587};
Object.assign(destino, origen);
console.log(destino);
/*
{
  "codigo": 250587,
  "nombres": "Carlos"
} 
*/