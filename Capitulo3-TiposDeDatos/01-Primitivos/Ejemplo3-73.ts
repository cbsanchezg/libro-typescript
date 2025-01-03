var aux="In omnia paratus";  // Significado: Listo para Todo
console.log(aux.endsWith('omnia'));                    // false
console.log(aux.endsWith('paratus'));                  // true
console.log(aux.endsWith('paratus', aux.length-8));    // false
console.log(aux.endsWith('omnia', aux.length-8));      // true