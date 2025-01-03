class Persona{
  mensaje(){
    return "Método del Padre";
  }   
}
class Alumno extends Persona{
  mensaje(){
    return super.mensaje();
  }  
}
var obj=new Alumno();
console.log(obj.mensaje()); // "Método del Padre"