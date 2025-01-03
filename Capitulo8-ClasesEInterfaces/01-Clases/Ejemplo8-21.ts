class Operaciones{
  static pi:number=3.1416;
  static sumar(a:number, b:number){
    return a+b;
  }
  static restar(a:number, b:number){
    return a-b
  }    
}
console.log(Operaciones.pi);            // 3.1416
console.log(Operaciones.sumar(4,14));   // 18
console.log(Operaciones.restar(28,4));  // 24