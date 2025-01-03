function evaluarNotas(a:number, b:number, c:number, d:number=1){
  var promedio:number= (a+b+c)/3;  
  if (d!=undefined && d>0){
     promedio=promedio+d;
  }
  if (promedio>=15) { console.log("Aprobado con "+promedio); }
  else              { console.log("Desaprobado con "+promedio );
  }
}
evaluarNotas(10,18,17)    // "Aprobado con 16"
evaluarNotas(10,18,17, 3) // "Aprobado con 18"