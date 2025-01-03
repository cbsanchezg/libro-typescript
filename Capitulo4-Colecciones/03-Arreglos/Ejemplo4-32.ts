var data:string[]=["E0", "E1", "E2", "E3", "E4"];
var newData=data.fill("Hola",2,4);  
console.log(newData);       // ["E0", "E1", "Hola", "Hola", "E4"]
console.log(data);          // ["E0", "E1", "Hola", "Hola", "E4"]