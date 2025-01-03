class Persona{
  nombre:string;
  apellido:string;
}
class Usuario{
  nombre:string;
  apellido:string;
  usuario:string;
  contrasena:string;
}
var obj:Persona=new Usuario();
obj.nombre="Daniela";
obj.apellido="Linares";
console.log(obj);  // { "nombre":"Daniela", "apellido":"Linares" }"