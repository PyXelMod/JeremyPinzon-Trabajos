// LECCIÓN 05 - RETO 2: Calculadora con switch
// Operaciones básicas con manejo de división entre cero

const num1 = 20;
const num2 = 0;
const operador = "/"; // '+', '-', '*', '/'

let resultado;

switch (operador) {
  case "+":
    resultado = num1 + num2;
    console.log(`${num1} + ${num2} = ${resultado}`);
    break;
  case "-":
    resultado = num1 - num2;
    console.log(`${num1} - ${num2} = ${resultado}`);
    break;
  case "*":
    resultado = num1 * num2;
    console.log(`${num1} * ${num2} = ${resultado}`);
    break;
  case "/":
    if (num2 === 0) {
      console.log("❌ Error: no se puede dividir entre cero.");
    } else {
      resultado = num1 / num2;
      console.log(`${num1} / ${num2} = ${resultado}`);
    }
    break;
  default:
    console.log("⚠ Operador no válido. Usa +, -, * o /");
}
