// LECCIÓN 11 - RETO 2: Contador de vocales
// Recorre cada carácter y cuenta las vocales

function contarVocales(texto) {
  const vocales = "aeiouáéíóú";
  let conteo = 0;
  for (const char of texto.toLowerCase()) {
    if (vocales.includes(char)) conteo++;
  }
  return conteo;
}

const frases = [
  "JavaScript es el lenguaje del futuro",
  "Hola mundo",
  "Programar es un superpoder"
];

frases.forEach(frase => {
  console.log(`"${frase}" → ${contarVocales(frase)} vocales`);
});
