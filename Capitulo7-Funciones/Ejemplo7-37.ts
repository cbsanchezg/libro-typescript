function saludo(nombre:string, apellido:string) {
  function getNombre() {
    return nombre + " " + apellido;
  }
  console.log("Buenos Días "+getNombre())
}
saludo("Daniela", "Linares"); // "Buenos Días Daniela Linares"