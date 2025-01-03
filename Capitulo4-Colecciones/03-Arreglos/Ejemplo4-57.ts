var data:number[]=[15, 23, 32, 31, 29, 18];
//Eliminación de un elemento desde de la posición 2
console.log(data.splice(2,1,25,28)); // [32] 
console.log(data);                   // [15, 23, 25, 28, 31, 29, 18] 