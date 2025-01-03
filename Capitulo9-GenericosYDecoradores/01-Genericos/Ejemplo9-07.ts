function numeroSocio<T>(doc: T): string {  // Función con parámetro de salida Generico
  let codigo:string="";
  if(typeof(doc)=="string"){
    if(doc.length==8 && (doc[0]=='A' || doc[0]=='B' || doc[0]=='C')){  // Validación CE
      codigo="200"+doc; 
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
let a=numeroSocio<number>(41788945);    
let b=numeroSocio<string>("C9854544");  
let c=numeroSocio<boolean>(true);       
console.log(a);           // "1041788945"
console.log(b);           // "20C9854544" 
console.log(c);           // "3003680936"

enum Socio{NUEVO, ANTIGUO}             // Tipo Enum       
let fecha: Date = new Date();          // Tipo Fecha
let d=numeroSocio<string>(Socio.ANTIGUO);   
//Argument of type 'Socio' is not assignable to parameter of type 'string'.(2345)
let e=numeroSocio<string>(fecha);           
//Argument of type 'Date' is not assignable to parameter of type 'string'.(2345)