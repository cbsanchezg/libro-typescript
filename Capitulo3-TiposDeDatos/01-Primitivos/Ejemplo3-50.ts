console.log(BigInt.asUintN(3, 0n));     // 0   -- Resultado correcto --
console.log(BigInt.asUintN(3, 1n));     // 1   -- Resultado correcto --
console.log(BigInt.asUintN(3, 2n));     // 2   -- Resultado correcto --
console.log(BigInt.asUintN(3, 3n));     // 3   -- Resultado correcto --
console.log(BigInt.asUintN(3, 4n));     // 4   -- Resultado correcto --
console.log(BigInt.asUintN(3, 5n));     // 5   -- Resultado correcto --
console.log(BigInt.asUintN(3, 6n));     // 6   -- Resultado correcto --
console.log(BigInt.asUintN(3, 7n));     // 7   -- Resultado correcto --
console.log(BigInt.asUintN(3, 8n));     // 0