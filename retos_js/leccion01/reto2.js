// LECCIÓN 01 - RETO 2: Datos de una mascota
// Crea variables para una mascota

const nombre = "Firulais";
const especie = "Perro";
const edad = 3;
const vacunada = true;
const dueño = null; // no tiene dueño registrado

// Mensaje con template literal
const mensaje = `Mi mascota ${nombre} es un ${especie} de ${edad} años. Vacunada: ${vacunada ? "sí" : "no"}. Dueño: ${dueño ?? "aún no registrado"}.`;
console.log(mensaje);
