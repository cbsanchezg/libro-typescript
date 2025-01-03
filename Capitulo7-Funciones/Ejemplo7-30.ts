var Bienvenida = {
  nombre: "Daniela",
  saludo: function(tipo:number, mensaje:string) {
    if(tipo==1){
        console.log("Buenos Días "+this.nombre+". "+mensaje);
    }
    else if(tipo==2){
        console.log("Buenas Tardes "+this.nombre+". "+mensaje);
    }else{
        console.log("Buenas Noches "+this.nombre+". "+mensaje);
    }    
  }
};
var Persona={nombre:"Daniela"};
var funcion=Bienvenida.saludo.bind(Persona, 1, "Que tenga un buen día."); 
funcion();          // "Buenos Días Daniela. Que tenga un buen día."
Persona.nombre="Camila";
funcion();          // "Buenos Días Camila. Que tenga un buen día."