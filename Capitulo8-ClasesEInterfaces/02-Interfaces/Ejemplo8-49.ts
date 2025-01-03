interface A {
  nombre: string;
}
interface B {
  edad: number;
  soltero:boolean;
} 
type AB = A | B;
let x:AB={nombre:"Camila", edad:14};  // Error