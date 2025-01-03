class Persona{
  mensaje(){
    return "Método del Padre";
  }   
}
class Alumno extends Persona{
  mensaje(){
    return "Método del Hijo";
  }  
}
var obj=new Alumno();
console.log(obj.mensaje()); // "Método del Hijo"