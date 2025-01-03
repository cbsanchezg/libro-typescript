interface A {  
  nombres: string;
}
type B = A & {
  edad: number;
} 
let aux:B;
aux={nombres:"Daniela", edad:15};
console.log(aux); // {"nombres": "Daniela", "edad": 15}