function esPar(element:any, index:number, array:any) { 
  if(element%2==0) { return true; }				
  return false;
} 
var data:number=[7, 25, 33, 31, 28, 18];
console.log(data.findIndex(esPar));       // 4