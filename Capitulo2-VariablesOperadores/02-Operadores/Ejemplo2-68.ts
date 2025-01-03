var a=5;
var b=10;
var c;
c = (a++, b--, a*b);
console.log(a)         // 9
console.log(b)         // 6
console.log(c)         // 54