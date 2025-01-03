var texto="15 de Enero del 2023";  
console.log(texto.length);                  // 20 --> Longitud
console.log(texto.slice(6));                // "Enero del 2023" 
console.log(texto.slice(-6));               // "l 2023" --> inicia en 14
console.log(texto.slice(6,11));             // "Enero"
console.log(texto.slice(0,11));             // "15 de Enero"
console.log(texto.slice(undefined,11));      // "15 de Enero"