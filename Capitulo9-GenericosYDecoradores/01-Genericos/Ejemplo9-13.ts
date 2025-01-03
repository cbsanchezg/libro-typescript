class Persona{
  nombres:string;
  apellidos:string;
  constructor(nom:string, ape:string){
    this.nombres=nom;
    this.apellidos=ape;
  }
}
class Paciente extends Persona{
  tipoSangre:string;
  constructor(nom:string, ape:string, tip:string){
    super(nom, ape);
    this.tipoSangre=tip;
  }
}
class Doctor extends Persona{ 
  licencia:number;
  especialidad:string;  
  constructor(nom:string, ape:string, esp:string, lic:number){
    super(nom, ape);
    this.especialidad=esp;
    this.licencia=lic;
  }
}
class Usuario{
  username:string;
  password:string;
  constructor(usr:string, pass:string){
    this.username=usr;
    this.password=pass
  }
}