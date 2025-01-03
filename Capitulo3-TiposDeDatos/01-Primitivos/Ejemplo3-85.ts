var texto="15 de Enero del 2023";
var regexp1 = /[0-9]/g; // Números del 0 al 9
console.log(texto.match(regexp1));                //  ["1", "5", "2", "0", "2", "3"]
console.log(Array.from(texto.matchAll(regexp1))); 
//  [["1"], ["5"], ["2"], ["0"], ["2"], ["3"]]