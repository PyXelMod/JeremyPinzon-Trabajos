// LECCIÓN 10 - RETO 1: Convertidor de monedas
// pesosADolares con tasa por defecto 4100

function pesosADolares(pesos, tasa = 4100) {
  return (pesos / tasa).toFixed(2);
}

// Dos con tasa por defecto, uno con tasa personalizada
console.log(`$500.000 COP → $${pesosADolares(500000)} USD`);
console.log(`$1.200.000 COP → $${pesosADolares(1200000)} USD`);
console.log(`$800.000 COP (tasa 4250) → $${pesosADolares(800000, 4250)} USD`);
