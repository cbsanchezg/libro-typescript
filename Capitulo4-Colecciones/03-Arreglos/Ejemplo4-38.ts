var dataJoin;
var data:number[]=[15, 20, 33, 48, 29];
dataJoin=data.join();
console.log(dataJoin);      // "15,20,33,48,29" 
dataJoin=data.join("/");
console.log(dataJoin);      // "15/20/33/48/29"