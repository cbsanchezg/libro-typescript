abstract class Persona {  
  nombres: string;
  apellidos:string;
}
abstract class Licencia {  
  codigo: string;
  expiracion:string;
}
abstract class Info extends Persona, Licencia{   //Error
  estatura:number;
}