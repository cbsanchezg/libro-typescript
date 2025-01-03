var aux="In omnia paratus";  
console.log(aux.lastIndexOf('omnia'));       // 3
console.log(aux.lastIndexOf('paratus'));     // 9
console.log(aux.lastIndexOf('a'));           // 12
console.log(aux.lastIndexOf('ergo'));        // -1
console.log(aux.lastIndexOf('paratus', 8));  // -1
console.log(aux.lastIndexOf('omnia', 8));    // -3