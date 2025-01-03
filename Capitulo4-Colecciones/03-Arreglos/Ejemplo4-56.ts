var data:number[]=[15, 23, 32, 31, 29, 18];
//Eliminación de un elemento desde de la posición 2
console.log(data.splice(2,1));      // [32] 
console.log(data);                  //  [15, 23, 31, 29, 18] 
//Eliminación de todos los elementos desde de la posición 2
console.log(data.splice(2));        //  [31, 29, 18] 
console.log(data);                  //  [15, 23]