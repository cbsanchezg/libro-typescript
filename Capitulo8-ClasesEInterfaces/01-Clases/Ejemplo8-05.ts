class Persona{
  nombres:string;
  apellidos:string;
  obtenerNombres(){
     return this.nombres+" "+this.apellidos;
  }
}
var obj= new Persona(); // Creación de instancia sin parámetros 