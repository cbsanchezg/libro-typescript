function evaluarNotas(a:number, b:number){
  var promedio:number= (a+b)/2;  
  if (promedio>11){
    console.log("Aprobado con "+promedio);
  }
  else{
    console.log("Desaprobado con "+promedio);
  }
}
evaluarNotas(10,18) // "Aprobado con 14"