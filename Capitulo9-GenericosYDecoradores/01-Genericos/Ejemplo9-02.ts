function numeroSocio(CE: string): string {
  let codigo:string=0;
  if(CE.length==8 && (CE[0]=='A' || CE[0]=='B' || CE[0]=='C')){  // Validación
      codigo="200"+CE; 
  }
  return codigo;
}
console.log(numeroContribuyente("B7889045")); // 200B7889045
console.log(numeroContribuyente("C2516897")); // 200C2516897
console.log(numeroContribuyente("A4567899")); // 200A4567899
console.log(numeroContribuyente("7889045"));  // 0