function comparaDecimal(a:number, b:number) {
    return Math.abs(a - b) <= Number.EPSILON; 
}
console.log(comparaDecimal(0.1+0.2, 0.3))    // true
console.log(comparaDecimal(0.2+0.4, 0.6))    // true
console.log(comparaDecimal(0.1+0.7, 0.8))    // true
console.log(comparaDecimal(0.2+0.7, 0.9))    // true
console.log(comparaDecimal(0.4+0.8, 1.2))    // true
console.log(comparaDecimal(0.6+0.7, 1.3))    // true
console.log(comparaDecimal(0.8+0.9, 1.7))    // true