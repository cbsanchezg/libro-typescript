class Persona{
  private nombres:string;
  private apellidos:string;
  obtenerNombres(){
     return this.nombres+" "+this.apellidos;
  }
}
var obj= new Persona();              // Creación de objeto 
obj.nombres="Daniela";               // Error
obj.apellidos="Linares";             // Error