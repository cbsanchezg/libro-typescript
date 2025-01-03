interface OperacionSuma{
  (num1:number, num2:number):number;
}
function sumar(a:number, b:number):number { //funcion de referencia
  return (a + b);
}
let p:OperacionSuma = sumar;
console.log(p(2,5));   // 7