type Datos1 = {nombres:string}
type Datos2 = {codigo:number;}
type Datos3 = {edad:number}
var origen1:Datos1={nombres:'Carlos'};
var origen2:Datos3={edad:41};
var destino:Datos2={codigo:250587};
Object.assign(destino, origen1, origen2); // No es necesario usar variable
console.log(destino);
/*
{
  "codigo": 250587,
  "nombres": "Carlos",
  "edad": 41
}  
*/