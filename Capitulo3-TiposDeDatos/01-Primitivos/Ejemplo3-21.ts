var a=new Number("15");          
var b=new Number("Texto");     
var c=new Number("15a");     
console.log(a);                   // Number:15
console.log(b);                   // Number:null
console.log(c);                   // Number:null
console.log(new Number(true));    // Number:1
console.log(new Number(false));   // Number:0