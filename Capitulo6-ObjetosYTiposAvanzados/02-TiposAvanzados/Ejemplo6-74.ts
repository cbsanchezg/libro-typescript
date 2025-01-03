var nombre:any= "Carlos";           
var tamano1:number=nombre.length;               // Forzando de froma inferida
var tamano2:number=(nombre as string).length;   // Forzando utilizando "as"
var tamano3:number=(<string> nombre).length;    // Forzando utilizando "<>"
console.log(tamano1); //6
console.log(tamano2); //6
console.log(tamano3); //6