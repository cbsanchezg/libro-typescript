enum EstadoCivil { SOLTERO="S", CASADO="C" };
console.log(EstadoCivil.CASADO);        // "C"
console.log(EstadoCivil["CASADO"]);     // "C"
console.log(EstadoCivil[2]);            // Error