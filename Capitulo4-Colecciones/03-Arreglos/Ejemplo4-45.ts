function acumulador(oldValue:any, currentValue:any, currentIndex:number, array:any) {     
  return oldValue+currentValue;
}
var data:number[]=[15, 20, 31, 8];
console.log(data.reduce(acumulador));       // 74
console.log(data.reduce(acumulador,2));     // 76