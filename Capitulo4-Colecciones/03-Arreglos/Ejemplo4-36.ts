function imprimeValor(element:any, index:number, array:any) {     
  console.log("index:"+index+" value:"+element);
}
var data:number[]=[15, 21, 33];
data.forEach(imprimeValor);
// "index:0 value:15" 
// "index:1 value:21" 
// "index:2 value:33"