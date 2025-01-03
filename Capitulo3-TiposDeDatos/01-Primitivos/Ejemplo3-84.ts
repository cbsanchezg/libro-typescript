var texto="15 de Enero del 2023";
console.log(texto.match("15"));    // ["15"]
console.log(texto.match("Enero")); // ["Enero"]
console.log(texto.match("20"));    // ["20"]
console.log(texto.match("enero")); // null