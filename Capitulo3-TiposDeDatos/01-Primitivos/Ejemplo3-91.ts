var texto="15 de Enero del 2023";
var regexp = /[0-9]/g; // Números del 0 al 9
console.log(texto.replace("Enero", "Febrero"));     
// "15 de Febrero del 2023"
console.log(texto.replace(regexp, "X"));            
// "XX de Enero del XXXX"