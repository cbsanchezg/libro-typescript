class Persona{
  private nombres:string;
}
interface Usuario extends Persona{
  username:string;
  password:string;
}
class Accion implements Usuario{ // Error
  username:string;
  password:string;
}