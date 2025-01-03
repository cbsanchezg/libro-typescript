function evaluarNotas(a:number, b:number, c:number){
  var promedio:number= (a+b+c)/3;  
  if (promedio>=15){
    console.log("Aprobado con "+promedio);
  }
  else{
    console.log("Desaprobado con "+promedio);
  }
}
evaluarNotas(10,18,17) // "Aprobado con 15"