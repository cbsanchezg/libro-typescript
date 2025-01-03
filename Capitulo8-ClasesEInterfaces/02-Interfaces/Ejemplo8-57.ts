interface Persona {  
  nombres:string;        
  readonly apellidos:string;
}
abstract class Person {  
  private nombres:string;
  protected apellidos:string;
  constructor(){  
    console.log("Imprimir");
  }
}