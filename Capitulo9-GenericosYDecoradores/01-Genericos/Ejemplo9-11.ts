class Persona{ 
  nombres:string;
  constructor(nombres:string) { 
    this.nombres=nombres;
  } 
}
class ListaPersona {
  lista:Array<Persona>= new Array<Persona>();
  add(persona:Persona) { 
    this.lista.push(persona);
  } 
  remove(persona:Persona) {     
    var index=this.getIndex(persona);
    if(index>-1) {
     this.lista.splice(index, 1);
    }
  }
  getIndex(persona:Persona){
    return this.lista.indexOf(persona, 0);
  }  
  list(){
    for(let item of this.lista){
      console.log(item)
    }
  }
}
class Mascota{ 
  tipo:string;
  constructor(tipo:string) { 
    this.tipo=tipo;
  } 
}
class ListaMascota {
  lista:Array<Mascota>= new Array<Mascota>();
  add(mascota:Mascota) { 
    this.lista.push(mascota);
  } 
  remove(mascota:Mascota) {     
    var index=this.getIndex(mascota);
    if(index>-1) {
     this.lista.splice(index, 1);
    }
  }
  getIndex(mascota:Mascota){
    return this.lista.indexOf(mascota, 0);
  }
  list(){
    for(let item of this.lista){
      console.log(item)
    }
  }  
}
let listaPersona= new ListaPersona();
let p1= new Persona("Camila");
let p2= new Persona("Daniela");
let p3= new Persona("Senior");
listaPersona.add(p1);   // Agregando Camila a la lista de Personas
listaPersona.add(p2);   // Agregando Daniela a la lista de Personas
listaPersona.add(p3);   // Agregando Senior a la lista de Personas
listaPersona.list();
/*
Persona: {
  "nombres": "Camila"
} 
Persona: {
  "nombres": "Daniela"
} 
Persona: {
  "nombres": "Senior"
} 
*/
listaPersona.remove(p3);
listaPersona.list();
/*
Persona: {
  "nombres": "Camila"
} 
Persona: {
  "nombres": "Daniela"
} 
*/

let listaMascota= new ListaMascota();
let m1= new Mascota("Gato");
let m2= new Mascota("Perro");
listaMascota.add(m1);   // Agregando Gato a la lista de Mascotas
listaMascota.add(m2);   // Agregando Perro a la lista de Mascotas
listaMascota.list();
/*
Mascota: {
  "tipo": "Gato"
} 
Mascota: {
  "tipo": "Perro"
} 
*/