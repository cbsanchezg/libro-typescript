function numeroSocio(doc: number): string;
function numeroSocio(doc: string): string;
function numeroSocio(doc: boolean): string;   // Nueva sobrecarga basada en parametro boolean
function numeroSocio(doc: string|number): string {
  let codigo:string="";
  if(typeof(doc)=="string"){
    if(doc.length==8 && (doc[0]=='A' || doc[0]=='B' || doc[0]=='C')){  // Validación CE
      codigo="20"+doc; 
    }
  }
  if(typeof(doc)=="number"){  
    if(doc>10000000){         // Validación DNI
      codigo=10+""+doc;
    }
  }  
 if(typeof(doc)=="boolean"){ 
    if(doc){                  // Validación Boolean
      codigo=30+""+Math.floor((Math.random() * 99999999)); 
    }
  } 
  return codigo;
}
console.log(numeroSocio(41788945));    // "1041788945"
console.log(numeroSocio("C9854544"));  // "20C9854544"
console.log(numeroSocio(true));        // "3019857671"
console.log(numeroSocio(false));       // ""
console.log(numeroSocio("C77"));       // ""
console.log(numeroSocio("77"));        // ""