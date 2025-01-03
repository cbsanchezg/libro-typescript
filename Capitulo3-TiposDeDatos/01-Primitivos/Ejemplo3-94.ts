var texto="15 de Enero del 2023";
// Palabra que empiece en mayúscula 
// y continua con minúsculas de 4 caracteres: Enero
var regexp = /[A-Z]{1}[a-z]{4}/g; 
console.log(texto.split(' '));       // ["15", "de", "Enero", "del", "2023"] 
console.log(texto.split(' ', 2));    // ["15", "de"] 
console.log(texto.split(regexp));    // ["15 de ", " del 2023"]
console.log(texto.split('x'));       // ["15 de Enero del 2023"]
console.log(texto.split('de'));      // ["15 ", " Enero ", "l 2023"] 
console.log(texto.split('de', -1));  // ["15 ", " Enero ", "l 2023"]
console.log(texto.split('de', 2));   // ["15 ", " Enero "]