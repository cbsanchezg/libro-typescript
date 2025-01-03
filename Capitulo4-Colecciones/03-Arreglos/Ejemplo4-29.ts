var data:string[]=["E0", "E1", "E2"];
var newData=data.entries();  
for (let x of newData) {
  console.log(x[0]+"-"+x[1]);
}
// 0-E0 
// 1-E1
// 1-E2