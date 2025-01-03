interface Persona{
  nombres:string;
}
interface Direccion{
  direccion?:string;
}
interface Usuario extends Persona, Direccion{
  usuario:string;
  clave:string;
}
const u:Usuario = {nombres:"Carlos", usuario:"csanchez", clave:"1234"};