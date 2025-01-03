class Vehiculo{}
class Auto extends Vehiculo{}
var a= new Auto();
console.log(a instanceof Auto);      // true
console.log(a instanceof Vehiculo);  // true