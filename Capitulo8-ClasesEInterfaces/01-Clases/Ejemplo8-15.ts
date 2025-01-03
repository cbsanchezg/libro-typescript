class Persona{
  public nombres:string;
  apellidos:string;
  obtenerNombres(){
     return this.nombres+" "+this.apellidos;
  }
}
var obj= new Persona();              // Creación de objeto 
obj.nombres="Daniela";
obj.apellidos="Linares";
console.log(obj.obtenerNombres());   // "Daniela Linares"