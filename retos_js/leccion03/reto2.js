// LECCIÓN 03 - RETO 2: Tarifa de parqueadero
// Ternario anidado para el valor por hora según tipo de vehículo

const tipo = "moto"; // "carro", "moto" o "bicicleta"
const horas = 4;

const valorHora = tipo === "carro" ? 3000
                : tipo === "moto"  ? 1500
                : 0; // bicicleta

const total = valorHora * horas;

console.log(`Tipo: ${tipo}`);
console.log(`Horas: ${horas}`);
console.log(`Valor por hora: $${valorHora}`);
console.log(`Total a pagar: $${total}`);
