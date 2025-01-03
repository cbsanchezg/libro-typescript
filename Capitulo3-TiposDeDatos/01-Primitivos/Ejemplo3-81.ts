var a="ABC";
var b="abc"’
console.log(a.localeCompare(b));                               //  1 
console.log(a.localeCompare(b, "es", {caseFirst:"upper"}));    // -1
console.log(a.localeCompare(b, "es", {sensitivity:"base"}));   //  0