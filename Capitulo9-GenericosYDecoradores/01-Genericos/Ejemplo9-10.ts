function evaluacion<T>(nota1:number, nota2:number, nota3:number, option:number): T{
  let promedio:number=(nota1+nota2+nota3)/3;  
  if(option==1){    
    return promedio as T
  }
  if(option==2){    
    if(promedio>=13){
      return "Aprobado" as T  
    }
    return "Desaprobado" as T
  }
  return "" as T  // Excepción de casos
}
let nota=evaluacion(13, 14, 15, 1);     // El valor del parámetro option es 1
let estado=evaluacion(13, 14, 15, 2);   // El valor del parámetro option es 2
let none=evaluacion(13, 14, 15, 3);     // El valor del parámetro option es 3
console.log(nota);     // 14           --> parámetro de salida tipo number
console.log(estado);   // "Aprobado"   --> parámetro de salida tipo string
console.log(none);     // ""           --> parámetro de salida tipo string