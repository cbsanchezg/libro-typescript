class Persona{
  nombres:string;  
  apellidos:string;
  constructor(nom:string, ape:string){
    this.nombres=nom;
    this.apellidos=ape;
  }
  calcularEdad(){
    console.log("Edad");
  }
}
interface Usuario extends Persona{
  username:string;
  password:string;
}
class Accion implements Usuario{
  nombres:string;
  apellidos:string;
  username:string;
  password:string;
  constructor(user:string, pass:string, ape:string, nom:string){
    this.nombres=nom;
    this.apellidos=ape;
    this.username=user;
    this.password=pass;
  }
  login(){
    console.log("Login");
  }
  calcularEdad(){
    console.log("Nueva Edad");
  }
}
const u:Accion= new Accion("Camila", "Sanchez", "csanchez", "1234");
u.login();           // "Login"
u.calcularEdad();    // "Nueva Edad"