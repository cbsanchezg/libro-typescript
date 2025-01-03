function numeroSocio(doc: string|number): string {
  let codigo:string="";
  if(typeof(doc)=="string"){
    if(doc.length==8 && (doc[0]=='A' || doc[0]=='B' || doc[0]=='C')){  // Validación CE
      codigo="20"+doc; 
    }
  }
  if(typeof(doc)=="number"){  
    if(doc>10000000){          // Validación DNI
      codigo=10+""+doc;
    }
  }  
  return codigo;
}
console.log(numeroSocio(41788945));          // 1041788945 
console.log(numeroSocio("C7789245"));        // "2307789245"
let a:string|number=numeroSocio(41784588);   
let b:number=numeroSocio(41788945);          // Error de asignación