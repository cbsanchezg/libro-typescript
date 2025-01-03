var a={nombres:'Carlos', edad:41};
Object.freeze(a);
a.nombres="Daniela"; 
//Error Cannot assign to read only property 'nombres' of object '#<Object>'