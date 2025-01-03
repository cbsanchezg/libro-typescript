function evaluarNotas(a:number, b:number):void{
  var promedio:number=(a+b)/2;  
  if (promedio>=15){
    console.log("Aprobado con "+promedio);
  }
  else{
    console.log("Desaprobado con "+promedio);
  }
}
console.log(evaluarNotas.length); // 2