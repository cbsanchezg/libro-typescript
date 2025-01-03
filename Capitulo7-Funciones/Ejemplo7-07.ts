function evaluarNotas(...restoDeNotas: number[]){
  var sumatoria=0;
  for(let i=0; i<restoDeNotas.length; i++){
    sumatoria=restoDeNotas[i]+sumatoria;
  }
  var promedio=sumatoria/restoDeNotas.length;
  if (promedio>=15){
    console.log("Aprobado con "+promedio);
  }
  else{
    console.log("Desaprobado con "+promedio);
  }
}
evaluarNotas()                // "Desaprobado con NaN"
evaluarNotas(10, 18)          // "Desaprobado con 14"
evaluarNotas(10, 18, 17)      // "Aprobado con 15"
evaluarNotas(10, 18, 17, 20)  // "Aprobado con 16.25"