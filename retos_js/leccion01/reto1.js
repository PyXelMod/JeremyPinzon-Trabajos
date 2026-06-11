// LECCIÓN 01 - RETO 1: Ficha de un libro
// Declara variables para los datos de un libro

const titulo = "Cien años de soledad";
const autor = "Gabriel García Márquez";
const añoPublicacion = 1967;
const paginas = 471;
const disponible = true;

// Imprimir cada una con su tipo usando typeof
console.log("titulo:", titulo, "—", typeof titulo);
console.log("autor:", autor, "—", typeof autor);
console.log("añoPublicacion:", añoPublicacion, "—", typeof añoPublicacion);
console.log("paginas:", paginas, "—", typeof paginas);
console.log("disponible:", disponible, "—", typeof disponible);

// Template literal con toda la información en una sola línea
const ficha = `"${titulo}" de ${autor} (${añoPublicacion}) · ${paginas} págs · Disponible: ${disponible ? "sí" : "no"}`;
console.log("\nFicha:", ficha);
