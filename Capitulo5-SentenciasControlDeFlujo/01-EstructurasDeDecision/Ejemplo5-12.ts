enum Dia {Lunes=1, Martes=2, Miercoles=3, Jueves=4, Viernes=5, Sabado=6, Domingo=7};
var a=5;
switch(a){
    case Dia.Lunes: console.log("Lunes"); break;
    case Dia.Martes: console.log("Martes"); break;
    case Dia.Miercoles: console.log("Miércoles"); break;
    case Dia.Jueves: console.log("Jueves"); break;
    case Dia.Viernes: console.log("Viernes"); break;
    case Dia.Sabado: console.log("Sabado"); break;
    case Dia.Domingo: console.log("Domingo"); break;
    default: console.log("Numero Equivocado");
}
// "Viernes"