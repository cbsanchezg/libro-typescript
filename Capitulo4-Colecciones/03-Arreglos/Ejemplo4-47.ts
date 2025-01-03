function acumulador(accumulator:any, currentValue:any, currentIndex:number, array:any) {     
  console.log("currentValue:"+currentValue+" - accumulator:"+accumulator);
  return accumulator+currentValue;
}
var data:number[]=[15, 20, 31, 18, 40];
console.log(data.reduceRight(acumulador, 2));       // 126