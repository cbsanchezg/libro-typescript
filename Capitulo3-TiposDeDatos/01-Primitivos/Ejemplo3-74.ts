var aux="In omnia paratus";  
console.log(aux.includes('omnia'));       // true
console.log(aux.includes('paratus'));     // true
console.log(aux.includes('paratus', 8));  // true
console.log(aux.includes('omnia', 8));    // false
console.log(aux.includes('ergo'));        // false