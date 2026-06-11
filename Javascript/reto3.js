const salario = 2000000;
let quincena = salario * 0.5;
const prestamo = 100000;
let salud = quincena * 0.04;
let pension = quincena * 0.04;
let neto = quincena - prestamo - salud - pension;

const mensaje = `le llega un sueldo quincenal de ${quincena} parte de eso se va a un prestamo ${prestamo} y tiene que pagar salud y pensiendo que es ${salud} entonces le estaria llegando un sueldo de ${neto}`;
console.log(mensaje

)