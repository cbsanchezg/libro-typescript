function evaluarNotas(a:number, b:number){
  var promedio:number=(nota1+nota2)/2;  
  if (promedio>=15){
    return "Aprobado con "+promedio;
  }
  else{
    return "Desaprobado con "+promedio;
  }
}
console.log(evaluarNotas(10,18)); // "Desaprobado con 14"