class Persona{
  protected nombres:string;
}
interface Usuario extends Persona{
  username:string;
  password:string;
}
class Accion extends Persona implements Usuario{ 
  username:string;
  password:string;
  nombres:string; // Miembro protegido declarado
}
const a:Accion= new Accion();
a.nombres="Carlos";
console.log(a); // Accion: {"nombres": "Carlos"} 