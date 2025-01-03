type Persona = { nombres:string,edad:number}
var a:Persona={nombres:'Carlos', edad:41};
for(var [key, value] of Object.entries(a)){
     console.log(key+": "+value);
}
/*
"nombres": Carlos" 
"edad": 41" 
*/