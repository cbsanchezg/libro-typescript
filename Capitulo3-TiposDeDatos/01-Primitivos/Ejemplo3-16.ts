var a:number=9007199254740992;
var b:number=9007199254740991;
var c:number=3.1416;
console.log(Number.isSafeInteger(a))      // false
console.log(Number.isSafeInteger(b))      // true
console.log(Number.isInteger(a))          // true
console.log(Number.isInteger(c))          // true
console.log(Number.isFinite(c))           // true
console.log(Number.isFinite(Infinity))     // false