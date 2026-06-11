// LECCIÓN 12 - RETO 2: Procesamiento encadenado con arrow functions
// [12, 45, 67, 23, 89, 11, 56, 34] → filtrar >30 → multiplicar x2 → sumar

const numeros = [12, 45, 67, 23, 89, 11, 56, 34];

const filtrados = numeros.filter(n => n > 30);
console.log("Filtrados (>30):", filtrados);

const duplicados = filtrados.map(n => n * 2);
console.log("Multiplicados x2:", duplicados);

const total = duplicados.reduce((acc, n) => acc + n, 0);
console.log("Suma total:", total);
