class Persona{
  protected nombres:string;
  protected apellidos:string;
  inicializarNombres(){
    this.nombres="Daniela";
    this.apellidos="Linares";
  }
   
}
class Alumno extends Persona{
  obtenerNombres(){
   return super.nombres+" "+super.apellidos;
  }  
}
var obj=new Alumno();               // Creación de objeto 
console.log(obj.obtenerNombres());  // "undefined undefined" 
obj.inicializarNombres();           // Se inicializan las propiedades
console.log(obj.obtenerNombres());  // "Daniela Linares"
console.log(obj.nombres);           // Error