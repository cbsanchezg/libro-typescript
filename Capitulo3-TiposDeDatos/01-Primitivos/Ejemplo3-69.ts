var especial="𠮸";
console.log(especial.charCodeAt(0));      // 55362 en Base Decimal
console.log(especial.charCodeAt(1));      // 57272 en Base Decimal
var a = (55362).toString(16); 
var b = (57271).toString(16); 
console.log(a); // d842 en Base Hexadecimal
console.log(b); // dfb7 en Base Hexadecimal
console.log('\u{d842}\u{dfb7}'); // 𠮸