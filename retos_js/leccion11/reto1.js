// LECCIÓN 11 - RETO 1: Procesar nombre de usuario
// trim → split → capitalizar cada palabra → join

const nombreCrudo = "  pEDRO peRez  ";

const nombreLimpio = nombreCrudo
  .trim()
  .split(" ")
  .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
  .join(" ");

console.log(`Original : "${nombreCrudo}"`);
console.log(`Procesado: "${nombreLimpio}"`);
