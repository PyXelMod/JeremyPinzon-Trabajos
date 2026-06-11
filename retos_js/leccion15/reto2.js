// LECCIÓN 15 - RETO 2: Países visitados con Set
// Eliminar duplicados, contar únicos, intersección con planes 2027

const visitados = ["Colombia", "México", "España", "México", "Argentina", "Colombia", "Perú", "Argentina"];

const unicos = new Set(visitados);
console.log("Países únicos visitados:", [...unicos]);
console.log("Total distintos:", unicos.size);

// Set con países planeados para 2027
const planeados2027 = new Set(["Brasil", "México", "Chile", "España", "Uruguay"]);

// Países en común (intersección)
const enComun = new Set([...unicos].filter(pais => planeados2027.has(pais)));
console.log("\nPlaneados 2027:", [...planeados2027]);
console.log("Ya visitados y planeados:", [...enComun]);
