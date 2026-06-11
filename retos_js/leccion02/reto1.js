// LECCIÓN 02 - RETO 1: Calculadora de nómina
// Un empleado gana 2.000.000 mensuales

const salarioMensual = 2000000;
let quincena = salarioMensual / 2;

console.log("Salario bruto (quincena): $", quincena);

// Deducciones con operadores de asignación compuesta
const salud = quincena * 0.04;
const pension = quincena * 0.04;
const prestamo = 100000;

quincena -= salud;
quincena -= pension;
quincena -= prestamo;

console.log("Descuento salud (4%):    $", salud);
console.log("Descuento pensión (4%):  $", pension);
console.log("Préstamo:                $", prestamo);
console.log("Neto a pagar:            $", quincena);
