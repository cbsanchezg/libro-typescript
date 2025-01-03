var index:number;
var data:number[]=[15, 20, 33, 48, 29, 30, 16, 19, 20, 38];
console.log(data.indexOf(20));     // 1
console.log(data.indexOf(20,6));   // 8
console.log(data.indexOf(50));     // -1
console.log(data.indexOf(19,-6));  // 7
console.log(data.indexOf(19,-1));  // -1