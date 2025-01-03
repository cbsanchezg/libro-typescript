type Persona = {
  nombres:string,
  edad:number
}
var a:Persona={nombres:'Carlos', edad:41};
var b=a; // Asignación de Referencia
if(a==b){
   console.log("Idénticos sin actualizar valores");
}
b.nombres="Daniela";
if(a==b){
   console.log("Idénticos actualizando valores");
}
// Idénticos sin actualizar valores
// Idénticos actualizando valores