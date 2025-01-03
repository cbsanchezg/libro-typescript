interface Persona {  
  nombres: string;
  apellidos:string;
}
interface Licencia {  
  codigo: string;
  expiracion:string;
}
interface Info extends Persona, Licencia{   //Herencia Múltiple
  estatura:number;
}