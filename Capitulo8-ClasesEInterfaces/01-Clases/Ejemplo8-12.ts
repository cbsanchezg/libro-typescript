class Persona{
  nombres:string;
  apellidos:string;
  constructor(){
    this.nombres="Daniela";
    this.apellidos="Linares";
  }
  obtenerNombres(){
   return this.nombres+" "+this.apellidos;
  }   
}
class Alumno extends Persona{
  codigo:string;
  profesion:string;
  constructor(){
     super(); // Llamada al constructor de la clase Padre
  }  
}
var obj=new Alumno();
console.log(obj.obtenerNombres());  // "Daniela Linares"