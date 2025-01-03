interface A {
  nombre: string;
}
interface B {
  edad: number;
  soltero:boolean;
} 
type AB = A | B;
let x:AB={nombre:"Camila"};                           // 1er caso
let y:AB={edad:41, soltero:false};                    // 2do caso
let z:AB={nombre:"Daniela", edad:23, soltero:false }; // 3er caso
console.log(x); // {"nombre": "Camila"} 
console.log(y); // {"edad": 41,"soltero": false}
console.log(z); // {"nombre": "Daniela", "edad": 23,"soltero": false}