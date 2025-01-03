var Bienvenida = {
  nombre: "Daniela", saludo: function(tipo:number, mensaje:string) {
    if(tipo==1)      {console.log("Buenos Días "+this.nombre+". "+mensaje);}
    else if(tipo==2) {console.log("Buenas Tardes "+this.nombre+". "+mensaje);}    
    else             {console.log("Buenas Noches "+this.nombre+". "+mensaje);}    
  }
};
Bienvenida.saludo.apply({}, [1, "Que tenga un buen día."]); 
// "Buenos Días undefined. Que tenga un buen día."