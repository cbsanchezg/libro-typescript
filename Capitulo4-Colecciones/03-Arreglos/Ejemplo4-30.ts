function esPar(element:any, index:number, array:any) { // Función de validación
 if(element%2==0){		 
    return true;		
  }				
  return false;
}
var data:number[]=[]                 // Declaración
data=[16, 24, 32, 30, 28];	       // Con solo valores pares
console.log(data.every(esPar));      // true
data=[16, 24, 33, 30, 28];	       // Con un solo valor impar 
console.log(data.every(esPar));      // false