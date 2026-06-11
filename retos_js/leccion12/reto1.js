// LECCIÓN 12 - RETO 1: Convertidores con arrow functions

const celsiusAFahrenheit = c => (c * 9 / 5 + 32).toFixed(2);
const kilometrosAMillas  = km => (km * 0.621).toFixed(2);
const kilogramosALibras  = kg => (kg * 2.205).toFixed(2);

console.log(`25°C → ${celsiusAFahrenheit(25)}°F`);
console.log(`100 km → ${kilometrosAMillas(100)} millas`);
console.log(`70 kg → ${kilogramosALibras(70)} libras`);
