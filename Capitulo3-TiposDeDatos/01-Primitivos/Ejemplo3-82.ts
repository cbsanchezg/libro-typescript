var a="ABC";
var b="abc.";
console.log(a.localeCompare(b));                                  // -1 
console.log(a.localeCompare(b, "es", {ignorePunctuation:true}) ); // 1 