function saludo(nombre:string) {
  console.log("Buenos Días "+nombre)
}
setTimeout(saludo, 2000, "Daniela");  // "Buenos Días Daniela"