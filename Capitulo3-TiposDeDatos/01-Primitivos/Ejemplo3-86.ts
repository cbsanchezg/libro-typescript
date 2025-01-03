var a="\u1E9B";     // Carácter especial similar a S
var b="\u0363";     // Carácter especial circulo superior
var texto=a+b;
console.log(a+","+b);         // ẛ,°
console.log(texto);           // ẛͣ 
console.log(texto.normalize("NFC"));          //  ẛͣ
console.log(texto.normalize("NFD"));          //  ẛͣ
console.log(texto.normalize("NFKC"));         //  ṡͣ
console.log(texto.normalize("NFKD"));         //  ṡͣ