console.log(BigInt.asUintN(2, 0n));     // 0   -- Resultado correcto --
console.log(BigInt.asUintN(2, 1n));     // 1   -- Resultado correcto --
console.log(BigInt.asUintN(2, 2n));     // 2   -- Resultado correcto --
console.log(BigInt.asUintN(2, 3n));     // 3   -- Resultado correcto --
console.log(BigInt.asUintN(2, 4n));     // 0   
console.log(BigInt.asUintN(2, 5n));     // 1  