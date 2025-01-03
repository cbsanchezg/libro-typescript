function acumulador(oldValue:any, currentValue:any, currentIndex:number, array:any) {     
  console.log("currentValue:"+currentValue+" - oldValue:"+oldValue);
  return oldValue+currentValue;
}
var data:number[]=[20, 31, 18, 40];
console.log(data.reduceRight(acumulador));       // 109
// "currentValue:0  - oldValue:18"  --> acumulador=0+18 =18
// "currentValue:18 - oldValue:40"  --> acumulador=18+40=58
// "currentValue:31 - oldValue:58"  --> acumulador=31+58=89
// "currentValue:20 - oldValue:89"  --> acumulador=20+89=109