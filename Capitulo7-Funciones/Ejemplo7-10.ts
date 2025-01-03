function promedio(a:number, b:number){
    return (a+b)/3;
}
function evaluarNotas(promedio:any, a:number, b:number){
  var pro:number=promedio(a,b);  
  if (promedio>=15){
    console.log("Aprobado con "+pro);
  }
  else{
    console.log("Desaprobado con "+pro);
  }
}
evaluarNotas(promedio, 12,18)  // "Aprobado con 15"
evaluarNotas(promedio, 14,14)  // "Desaprobado con 14"