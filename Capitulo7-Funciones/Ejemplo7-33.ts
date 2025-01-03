function suma(a:number, b:number):number { return a+b; }
var arr:[number, number]=[20,30];
console.log(...arr);        // 20, 30
console.log(suma(...arr));  // 50