enum Codigo {a=1, b=3, c=5}
const valor1 = new Number(5);
const valor2 = 5;
const valor3 = new Number(5);
console.log(valor1==5);          // true
console.log(valor1==valor2);     // true
console.log(valor1==valor3);     // false
console.log(valor1==Codigo.c);   // true
console.log(valor2==Codigo.c);   // true
console.log(valor3==Codigo.c);   // true