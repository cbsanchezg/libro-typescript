function comparar(elementA:any, elementB:any) {     
  if(elementA>elementB)    {return 1;}
  if(elementB>elementA)    {return -1;}
  return 0;
}
var data:number[]=[15, 23, 32, 31, 29];	
console.log(data.sort(comparar));  //   [15, 23, 29, 31, 32]