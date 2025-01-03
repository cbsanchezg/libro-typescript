type PersonaA = {
  nombres:string,
  edad:number
}
type PersonaB = {
  nombres:string,
  edad:number
}
var a:PersonaA={nombres:'Carlos', edad:41};
var b:PersonaB={nombres:'Carlos', edad:41};
if(a==b){
   console.log("Idénticos");
}else{
   console.log("No Idénticos");
}
// No Idénticos