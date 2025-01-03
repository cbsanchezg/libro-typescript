function evaluarNotas(a:number, b:number):void{
  var promedio:number=(nota1+nota2)/2;  
  if (promedio>=15){
    console.log("Aprobado con "+promedio);
  }
  else{
    console.log("Desaprobado con "+promedio);
  }
}
evaluarNotas(10,18); // "Desaprobado con 14"