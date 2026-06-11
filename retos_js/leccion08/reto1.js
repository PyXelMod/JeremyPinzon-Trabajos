// LECCIÓN 08 - RETO 1: Generador de números aleatorios con do/while
// Genera hasta obtener un número menor a 10

let intentos = 0;
let numero;

do {
  numero = Math.floor(Math.random() * 100) + 1;
  intentos++;
  console.log(`Generado: ${numero}`);
} while (numero >= 10);

console.log(`\n✅ Número menor a 10 obtenido: ${numero}`);
console.log(`Total de intentos: ${intentos}`);
