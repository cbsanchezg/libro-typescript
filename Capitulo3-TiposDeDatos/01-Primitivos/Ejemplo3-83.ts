var texto="15 de Enero del 2023";
var regexp1 = /[0-9]/g; // Números del 0 al 9
var regexp2 = /[A-Z]/g; // Letras mayúsculas de A a la Z
var regexp3 = /[A]/g;   // Letra mayúscula A
console.log(texto.match(regexp1)); // ["1", "5", "2", "0", "2", "3"]
console.log(texto.match(regexp2)); // ["E"]
console.log(texto.match(regexp3)); // null