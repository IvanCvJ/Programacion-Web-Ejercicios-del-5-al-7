let MiArreglo = [1,1,2,3,3,3,3,3,3,3,4,4,];

let NumeroMax = MiArreglo[0];

let ContadorMax = 1;

let NumeroRec = MiArreglo[0];

let ContadorRec = 1;

for (var i = 0; i < MiArreglo.length; i++) {
  if (MiArreglo[i] == NumeroRec) {
    ContadorRec++
    if (ContadorRec > ContadorMax) {
      ContadorMax = ContadorRec;
      NumeroMax = NumeroRec;
    }
  } else {
    NumeroRec = MiArreglo[i];
    ContadorRec = 1;
  }
}

console.log("El número con más ocurrencias seguidas es: " + NumeroMax);
console.log("Aparece " + ContadorMax + " veces seguidas.");