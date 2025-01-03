class OperacionesMatematicas{    
    a: number;
    b: number;
    constructor(x:number, y:number) {           //Método Constructor
        this.a = x;
        this.b = y;
    }    
    sumar(){                                    //Método Sumar
        var suma=this.a+this.b;
        return suma;
    }                                       
    restar(){                                   //Método Restar
        var resta=this.a-this.b;
        return resta;
    }               
    multiplicar(){                              //Método Multiplicar
        var multiplicacion=this.a*this.b;
        return multiplicacion;
    }               
    dividir(){                                  //Método Dividir
        var division=this.a/this.b;
        return division;
    }               
}