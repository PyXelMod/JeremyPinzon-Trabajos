// LECCIÓN 04 - RETO 2: Validación de acceso a evento
// Menores de 13 no entran, 13-17 solo con acompañante, mayores solos

const edad = 15;
const conAcompañante = true;

if (edad < 13) {
  console.log("❌ No puedes ingresar: menores de 13 no tienen acceso.");
} else if (edad < 18) {
  if (conAcompañante) {
    console.log("✅ Puedes ingresar acompañado.");
  } else {
    console.log("❌ Entre 13 y 17 años: solo puedes entrar con un acompañante.");
  }
} else {
  console.log("✅ Puedes ingresar sin restricciones.");
}
