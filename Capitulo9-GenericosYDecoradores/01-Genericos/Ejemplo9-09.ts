function evaluacion(nota1:number, nota2:number, nota3:number): string {
  let promedio:number=(nota1+nota2+nota3)/3;
  if(promedio>=13){
    return "Aprobado";
  }
  return "Desaprobado";
}
console.log(promedio(14, 12, 10));   // "Desaprobado"