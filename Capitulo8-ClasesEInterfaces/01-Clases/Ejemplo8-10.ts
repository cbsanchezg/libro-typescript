class Persona{
  nombres:string;
  constructor(n:string){
    this.nombres=n;
  }
}
var obj= new Persona("Camila");     // Creación de instancia 
console.log("nombres" in obj));     // true
console.log("apellidos" in obj);    // false