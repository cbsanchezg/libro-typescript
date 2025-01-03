var a= 100;
var b=BigInt(a);
console.log(b);             // 100
console.log(typeof(b));     // bigint

var c=BigInt(25) + 25n;
console.log(c);             // 50
console.log(typeof(c))      // bigint