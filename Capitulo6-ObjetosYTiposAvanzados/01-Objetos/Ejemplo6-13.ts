type Persona = {
  nombres:string,
  edad:number
}
var a:Persona={nombres:'Carlos', edad:41};
var b:Persona={nombres:'Carlos', edad:41};
if(a==b){
   console.log("Idénticos");
}else{
   console.log("No Idénticos");
}
// No Idénticos