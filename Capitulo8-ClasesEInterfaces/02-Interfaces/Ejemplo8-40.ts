interface Usuario{
  usuario:string;
  clave:string; 
  login():boolean;
}
class Login implements Usuario{
  usuario:string;
  clave:string;
  constructor(u: string, c:string) {
    this.usuario = u;
    this.clave = c;
  }
  public login():boolean{
    console.log("Iniciar sesión");
    return true;
  }
let p:Login=new Login("csanchez", "123456");
p.login();  // "Iniciar sesión"