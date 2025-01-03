function verificarPar(element:any, index:number, array:any) {     
  if(element%2==0){
    return true;
  }
  return false;
}
function filtrarPar(element:any, index:number, array:any) {     
  if(element%2==0){
    return element;
  }
}
var dataPar;
var data:number[]=[15, 20, 31, 8];
dataPar=data.map(verificarPar);     
console.log(data.map(verificarPar));      // [false, true, false, true] 
dataPar=data.map(filtrarPar);   
console.log(dataPar);                    // [undefined, 20, undefined, 8]