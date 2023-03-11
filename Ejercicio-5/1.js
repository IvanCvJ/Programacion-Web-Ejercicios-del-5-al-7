const MiArreglo = [1,,2,2,2,1,3,3,1,2,1,5,1,1,1,1,4,4,4];
const Contador = {};

for (let i = 1; i <= 5; i++) {
  Contador[i] = 0;
}

for (let i = 0; i < MiArreglo.length; i++) {
  Contador[MiArreglo[i]]++;
}

for (let i = 1; i <= 5; i++) {
  console.log(`${i}: ${'*'.repeat(Contador[i])}`);
}