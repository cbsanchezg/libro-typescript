class Persona{
  nombres:string;
}
class Usuario{
  clave:string;
}
var obj= new Persona(); // Creación de instancia 
console.log(obj instanceof Persona);  // true
console.log(obj instanceof Usuario);  // false