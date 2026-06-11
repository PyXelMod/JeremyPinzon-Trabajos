// LECCIÓN 13 - RETO 2: Ranking de puntajes
// spread para copia, ordenar descendente, top 3, promedio con reduce

const puntajes = [78, 95, 61, 88, 42, 100, 73, 55];
console.log("Original:", puntajes);

// Copia y ordenar de mayor a menor
const ranking = [...puntajes].sort((a, b) => b - a);
console.log("Ranking (desc):", ranking);

// Top 3
const top3 = ranking.slice(0, 3);
console.log("Top 3:", top3);

// Promedio de los top 3
const promedio = top3.reduce((sum, n) => sum + n, 0) / top3.length;
console.log(`Promedio top 3: ${promedio.toFixed(2)}`);
