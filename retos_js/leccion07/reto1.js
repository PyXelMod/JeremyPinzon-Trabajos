// LECCIÓN 07 - RETO 1: Adivina el número
// Simula intentos con un array hasta acertar el número secreto

const numeroSecreto = 42;
const intentos = [10, 55, 30, 42, 7]; // simulación de entradas del usuario

let i = 0;
let acertado = false;
let conteo = 0;

while (i < intentos.length && !acertado) {
  const intento = intentos[i];
  conteo++;
  console.log(`Intento ${conteo}: ${intento}`);

  if (intento === numeroSecreto) {
    acertado = true;
    console.log(`✅ ¡Correcto! Encontraste el número en ${conteo} intento(s).`);
  } else if (intento < numeroSecreto) {
    console.log("  → El número es mayor.");
  } else {
    console.log("  → El número es menor.");
  }
  i++;
}

if (!acertado) {
  console.log("❌ No se adivinó el número en los intentos disponibles.");
}
