interface A {
  nombre: string;
}
interface B {
  edad: number;
} 
type AB = A & B;
let aux:AB;
aux={nombre:"Daniela", edad:15};
console.log(aux); // {"nombre": "Daniela", "edad": 15}