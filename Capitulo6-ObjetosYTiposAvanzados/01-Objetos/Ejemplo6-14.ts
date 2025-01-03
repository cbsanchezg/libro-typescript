type Persona = {
  nombres:string,
  edad:number
}
var a:Persona={nombres:'Carlos', edad:41};
var b=a;
if(a==b){
   console.log("Idénticos");
}else{
   console.log("No Idénticos");
}
// Idénticos