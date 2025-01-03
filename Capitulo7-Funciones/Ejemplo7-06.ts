function evaluarNota(a:number | string){
  if(a>=15 || a=="Aprobado"){
    console.log("Aprobado");
  }
  else{
    console.log("Desaprobado");
  }
}
evaluarNota(18)         // "Aprobado"
evaluarNota("Aprobado") // "Aprobado"