// LECCIÓN 06 - RETO 1: Suma del 1 al 100
// Suma acumuladora y conteo de múltiplos de 5

let suma = 0;
let multiplosDeCinco = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
  if (i % 5 === 0) multiplosDeCinco++;
}

console.log("Suma del 1 al 100:", suma);
console.log("Múltiplos de 5 entre 1 y 100:", multiplosDeCinco);
