class Usuario{
  username:string;
  password:string;
  constructor(usr:string, pass:string){
    this.username=usr;
    this.password=pass
  }
}
class Persona extends Usuario{  // Hereda de la clase Usuario
  nombres:string;
  apellidos:string;
  constructor(usr:string, pass:string, nom:string, ape:string){
    super(usr, pass)
    this.nombres=nom;
    this.apellidos=ape;
  }
}
class Paciente extends Persona{
  tipoSangre:string;
  constructor(nom:string, ape:string, tip:string, usr:string, pass:string){
    super(usr, pass, nom, ape);
    this.tipoSangre=tip;
  }
}
class Doctor extends Persona{ 
  licencia:number;
  especialidad:string;  
  constructor(nom:string, ape:string, esp:string, lic:number, usr:string, pass:string){
    super(usr, pass, nom, ape);
    this.especialidad=esp;
    this.licencia=lic;
  }
}
let doc=new Doctor("Cinthya", "Sanchez", "Neurocirugía", 98789, "csanchez", "123");
console.log(doc);
/*
 Doctor: {
  "username": "csanchez",
  "password": "123",
  "nombres": "Cinthya",
  "apellidos": "Sanchez",
  "especialidad": "Neurocirugía",
  "licencia": 98789
} 
*/