console.log(BigInt.asIntN(3, 0n));     // 0   -- Resultado correcto --
console.log(BigInt.asIntN(3, 1n));     // 1   -- Resultado correcto --
console.log(BigInt.asIntN(3, 2n));     // 2   -- Resultado correcto --
console.log(BigInt.asIntN(3, 3n));     // 3   -- Resultado correcto --
console.log(BigInt.asIntN(3, 4n));     // -4
console.log(BigInt.asIntN(3, 5n));     // -3
console.log(BigInt.asIntN(3, 6n));     // -2
console.log(BigInt.asIntN(3, 7n));     // -1
console.log(BigInt.asIntN(3, 8n));     // 0
console.log(BigInt.asIntN(3, 9n));     // 1