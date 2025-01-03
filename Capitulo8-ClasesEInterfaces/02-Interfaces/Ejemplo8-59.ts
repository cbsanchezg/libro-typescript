interface Persona {  
  codigo: string;
}
interface Persona {  
  codigo: number;        // Error
}
const obj1:Persona={codigo:"9721"};
const obj2:Persona={codigo:9721};