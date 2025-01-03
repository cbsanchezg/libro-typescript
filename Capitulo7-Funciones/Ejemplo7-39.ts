function saludo(nombre:string) {
  console.log("Buenos Días "+nombre)
}
var aux=setTimeout(saludo, 3000, "Daniela");  // La función "saludo" inicia despúes de 3 seg
setTimeout(clearTimeout, 1000, aux);          // Despúes de 1 seg se cancela la función