// LECCIÓN 10 - RETO 2: Calculadora de IMC
// calcularIMC + clasificarIMC llamadas en secuencia

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function clasificarIMC(imc) {
  if (imc < 18.5) return "Bajo peso";
  if (imc < 25)   return "Normal";
  if (imc < 30)   return "Sobrepeso";
  return "Obesidad";
}

const peso = 72;
const altura = 1.70;

const imc = calcularIMC(peso, altura);
const clasificacion = clasificarIMC(imc);

console.log(`Peso: ${peso} kg | Altura: ${altura} m`);
console.log(`IMC: ${imc.toFixed(2)}`);
console.log(`Clasificación: ${clasificacion}`);
