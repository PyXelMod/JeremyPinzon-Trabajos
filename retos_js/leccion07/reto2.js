// LECCIÓN 07 - RETO 2: Validar contraseña fuerte
// Iterar hasta encontrar una contraseña con al menos 8 caracteres

const contraseñas = ["hola", "123", "abc12345", "ContraseñaFuerte2026"];

let idx = 0;
let descartadas = 0;
let encontrada = null;

while (idx < contraseñas.length) {
  const pwd = contraseñas[idx];

  if (pwd.length >= 8) {
    encontrada = pwd;
    break;
  } else {
    console.log(`❌ Descartada: "${pwd}" (muy corta)`);
    descartadas++;
  }
  idx++;
}

if (encontrada) {
  console.log(`✅ Contraseña aceptada: "${encontrada}"`);
  console.log(`   Descartadas antes: ${descartadas}`);
} else {
  console.log("⚠ Ninguna contraseña cumple el requisito mínimo.");
}
