var data:string[]=["E0", "E1", "E2", "E3", "E4"];
console.log(data);                      //["E0", "E1", "E2", "E3", "E4"] 
var newData=data.copyWithin(0,2,4);	
console.log(newData);                   //["E2", "E3", "E2", "E3", "E4"] 