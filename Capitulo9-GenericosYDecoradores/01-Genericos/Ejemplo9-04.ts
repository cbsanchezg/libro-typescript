function numeroSocio(doc: number): string;
function numeroSocio(doc: string): string;
function numeroSocio(doc: string|number): string {
  let codigo:string="";
  if(typeof(doc)=="string"){
    if(doc.length==8 && (doc[0]=='A' || doc[0]=='B' || doc[0]=='C')){  // Validación CE
      codigo="200"+doc; 
    }
  }
  if(typeof(doc)=="number"){ 
    if(doc>10000000){          // Validación DNI
      codigo=10+""+doc;
    }
  }  
  return codigo;
}
let a:number=numeroSocio(41788945); 
let b:string=numeroSocio("C9854544");
console.log(a);  // 1041788945
console.log(b);  // "200C9854544"