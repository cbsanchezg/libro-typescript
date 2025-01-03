function esPar(element:any, index:number, array:any) { 
  if(element%2==0){		 
    return true;	
  }				
  return false;
} 
var data:number[]=[7, 25, 28, 18];			
console.log(data.find(esPar));       // 28