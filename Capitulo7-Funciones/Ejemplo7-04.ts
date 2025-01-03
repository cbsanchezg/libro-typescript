var nota1:number=10;
var nota2:number=18;
function evaluarNotas(){
  var promedio:number=(nota1+nota2)/2;  
  if (promedio>=15){
    console.log("Aprobado con "+promedio);
  }
  else{
    console.log("Desaprobado con "+promedio);
  }
}
evaluarNotas(); // "Desaprobado con 14"