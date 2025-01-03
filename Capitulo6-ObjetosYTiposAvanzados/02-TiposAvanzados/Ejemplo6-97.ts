type Reloj={marca:string, tipo: "digtal" | "analogico";}
type Gafas={marca: string, medida: number}
function esReloj(obj:any): obj is Reloj{
  return (obj as Reloj).tipo != undefined;  // Solo retornará si el tipo no es undefined
}
var a:Reloj = {marca: "Kenneth Cole", tipo: "analogico"};
var b:Gafas = {marca: "Ray Ban", medida:0.75};
console.log(esReloj(a));  // true
console.log(esReloj(b));  // false