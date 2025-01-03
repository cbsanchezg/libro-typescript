class Persona{ 
  nombres:string;
  constructor(nombres:string) { 
    this.nombres=nombres;
  } 
}
class Mascota{ 
  tipo:string;
  constructor(tipo:string) { 
    this.tipo=tipo;
  } 
}
class ListaGenerica<T> {
  lista:Array<T>= new Array<T>();
  add(objeto:T) { 
    this.lista.push(objeto);
  } 
  remove(objeto:T) {     
    var index=this.getIndex(objeto);
    if(index>-1) {
     this.lista.splice(index, 1);
    }
  }
  getIndex(objeto:T){
    return this.lista.indexOf(objeto, 0);
  }
  list(){
    for(let item of this.lista){
      console.log(item)
    }
  }
}
let listaPersona=new ListaGenerica<Persona>();
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

let listaMascota= new ListaGenerica<Mascota>();
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