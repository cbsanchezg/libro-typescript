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
type Usuario<T> = {
  [P in keyof T]: T[P];  // atributos de la clase Genérica
} & { 
  username:string;     // atributos propios de Usuario
  password:string;     // atributos propios de Usuario
};

let usr: Usuario<Doctor> = {
  username: "csanchez",
  password: "123",  
  nombres:"Cinthya",
  apellidos:"Sanchez",
  especialidad:"Neurocirugía",
  licencia:1415
};

console.log(usr);
/*
{
  "username": "csanchez",
  "password": "123",
  "nombres": "Cinthya",
  "apellidos": "Sanchez",
  "especialidad": "Neurocirugía",
  "licencia": 1415
}
*/