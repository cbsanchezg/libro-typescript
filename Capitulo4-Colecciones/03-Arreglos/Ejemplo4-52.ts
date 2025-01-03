var data:number[]=[15, 20, 31, 18, 40, 62];
console.log(data);                         //  [15, 20, 31, 18, 40, 62] 
console.log(data.slice(undefined,4));       //  [15, 20, 31, 18]
console.log(data.slice(4,undefined));       //  [31, 18, 40, 62]