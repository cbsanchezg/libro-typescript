enum Colores { AZUL=5, ROJO=7 };
console.log(Colores);       // { "5": "AZUL", "7": "ROJO", "AZUL": 5, "ROJO": 7}          
console.log(Colores.ROJO);  // 7

enum Colores { AZUL, ROJO };
console.log(Colores);       // { "0": "AZUL", "1": "ROJO", "AZUL": 0, "ROJO": 1}          
console.log(Colores.ROJO);  // 1