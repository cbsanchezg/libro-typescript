function evaluarNotas(a:number, b:number){
  var promedio:number= (a+b)/2 
  if(promedio>=15){                       // Se aprueba con nota minima de 15
    console.log("Aprobado con "+promedio);
  }
  else{
    console.log("Desaprobado con "+promedio);
  }
}
evaluarNotas(10,18) // "Desaprobado con 14"