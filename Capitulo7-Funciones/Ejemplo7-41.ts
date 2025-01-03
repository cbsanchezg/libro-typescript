function saludo(nombre:string) {
  console.log("Buenos Días "+nombre)
}
var aux=setInterval(saludo, 3000, "Daniela");  
setTimeout(() => { clearInterval(aux); console.log('Detenido'); }, 7000);
/*
"Buenos Días Daniela" 
"Buenos Días Daniela" 
"Buenos Días Daniela" 
"Detenido"
*/