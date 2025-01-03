function esPar(element:any, index:number, array:any) { 
  if(element%2==0){		 
    return true;		
  }				
  return false;
} 
var data:number[]=[16, 25, 33, 31, 28, 17];			
console.log(data.filter(esPar));       // [16, 28]