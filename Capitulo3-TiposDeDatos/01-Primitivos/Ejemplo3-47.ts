console.log(BigInt.asIntN(3, -1n));     // -1  -- Resultado correcto --
console.log(BigInt.asIntN(3, -2n));     // -2  -- Resultado correcto --
console.log(BigInt.asIntN(3, -3n));     // -3  -- Resultado correcto --
console.log(BigInt.asIntN(3, -4n));     // -4  -- Resultado correcto --
console.log(BigInt.asIntN(3, -5n));     // 3