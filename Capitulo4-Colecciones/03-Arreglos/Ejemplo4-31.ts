function esPar(element:any, index:number, array:any) {
 if(element%2==0){		 
    return true;		
  }				
  return false;
}
var data:number[]=[]                
console.log(data.every(esPar));      // true