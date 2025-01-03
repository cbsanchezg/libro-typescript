interface Usuario<T>{
  username:string;
  password:string;
  persona:T;
}
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
let doc=new Doctor("Cinthya", "Sanchez", "Neurocirugía", 1415);
let usr:Usuario<Doctor>={"username":"csanchez", "password":"123", "persona":doc}
console.log(usr);
/*
{
  "username": "csanchez",
  "password": "123",
  "persona": {
    "nombres": "Cinthya",
    "apellidos": "Sanchez",
    "especialidad": "Neurocirugía",
    "licencia": 1415
  }
}  
*/
console.log(doc.persona);
/*
Doctor: {
  "nombres": "Cinthya",
  "apellidos": "Sanchez",
  "especialidad": "Neurocirugía",
  "licencia": 1415
}  
*/