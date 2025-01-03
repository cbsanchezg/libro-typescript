var aux;
var msg;
msg="Buenos Días Perú";
aux =  msg ?? "No Mensaje";
console.log(aux);              //Buenos Días Perú
msg=null;
aux =  msg ?? "No Mensaje";
console.log(aux);              //No Mensaje