class Vehiculo {  
  metodo() {}
} 
class Auto extends Vehiculo {
  metodoA() {}
}
class Camioneta extends Vehiculo {
  metodoB() {}
}
var x=new Auto();
var y=new Camioneta();
var z=new Vehiculo();
console.log("metodoA" in x);  // true
console.log("metodoB" in y);  // true
console.log("metodo" in x);   // true
console.log("metodo" in z);   // true