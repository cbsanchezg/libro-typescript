class Persona{
  nombres:string;
  apellidos:string;
  inicializarValores(){
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
  inicializar(){
     super.inicializarValores(); // Llamada a Método del Padre
  }  
}
var obj=new Alumno();
console.log(obj.obtenerNombres());  // "undefined undefined" 
obj.inicializar();
console.log(obj.obtenerNombres());  // "Daniela Linares"