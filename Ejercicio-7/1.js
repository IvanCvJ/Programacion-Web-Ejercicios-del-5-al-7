let arreglo = [1,0,9,0,5,6,5];
console.log(arreglo)



for (var i = 0; i < arreglo.length; i++) {
  
  for (var j = i; j < arreglo.length; j++) {
    
    if (arreglo[i]+arreglo[j] == 10) {
        console.log( "La suma seria esta " + arreglo[i] + " + " + arreglo[j]);
       
    } 
  }  
}