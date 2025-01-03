class Persona{
  private nombres:string;
}
interface Usuario extends Persona{
  username:string;
  password:string;
}
class Accion extends Persona implements Usuario{ 
  username:string;
  password:string;
}