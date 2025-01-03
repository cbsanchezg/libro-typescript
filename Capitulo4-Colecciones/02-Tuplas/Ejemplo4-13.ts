var tupla:[number, string];
tupla=[1, "Numero1"];
console.log(tupla);         // [1, "Numero1"] 
tupla.push(2, "Numero2");   
console.log(tupla);         // [1, "Numero1", 2, "Numero2"] 
tupla.push(3);   
console.log(tupla);         // [1, "Numero1", 2, "Numero2", 3] 
tupla.pop();
console.log(tupla);         // [1, "Numero1", 2, "Numero2"]