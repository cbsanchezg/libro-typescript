class Persona{
  nombres:string;
  apellidos:string;
  obtenerNombres(){
   return this.nombres+" "+this.apellidos;
  }   
}
class Alumno extends Persona{
  codigo:string;
  profesion:string; 
}
var obj=new Alumno();
obj.nombres="Daniela";
obj.apellidos="Linares";
console.log(obj.obtenerNombres());  // "Daniela Linares"