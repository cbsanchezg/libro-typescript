function esPar(element:any, index:number, array:any) { 
  if(element%2==0){		 
    return true;		
  } 
  return false;
} 
var data:number[]=[15, 23, 32, 31, 29];		
console.log(data.some(esPar));       // true