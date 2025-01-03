var texto="15 de Enero del 2023";
var regexp = /[0-9]{4}/g;             // Números del 0 al 9 con longitud de 4 dígitos
console.log(texto.search("Enero"));   // 6
console.log(texto.search(regexp));    // 16