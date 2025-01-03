enum EstadoCivil { SOLTERO=1, CASADO=2 };
console.log(EstadoCivil.CASADO);        // 2
console.log(EstadoCivil["CASADO"]);     // 2
console.log(EstadoCivil[2]);            // "CASADO"