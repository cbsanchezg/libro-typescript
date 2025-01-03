var a = 'Carlos'; 
var b = 'Camila'; 
var c = 'Daniela';                  // Orden alfabético: Camila, Carlos Daniela
console.log(a.localeCompare(b));           //  1 'a' se encuentra después que 'b'  
console.log(a.localeCompare(c));           // -1 'a' se encuentra antes que 'c'
console.log(a.localeCompare("Camila"));    //  0