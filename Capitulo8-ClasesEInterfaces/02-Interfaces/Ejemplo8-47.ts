interface A {
  nombre: string;
}
interface B {
  edad: number;
} 
type AB = A & B;
let aux:AB;
aux={nombre:"Daniela"}; // Error, necesita inicializarse la propiedad "edad".