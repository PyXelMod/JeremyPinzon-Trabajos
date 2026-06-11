// LECCIÓN 13 - RETO 1: Lista de invitados
// push, unshift, splice, includes, sort

const invitados = [];

// Agregar 4 nombres
invitados.push("Ana", "Carlos", "Pedro", "Lucía");
console.log("Tras push:", invitados);

// Agregar VIP al inicio
invitados.unshift("Diego VIP");
console.log("Tras unshift:", invitados);

// Quitar el de índice 2
invitados.splice(2, 1);
console.log("Tras splice(2,1):", invitados);

// Verificar si 'Pedro' está
console.log("¿Está Pedro?:", invitados.includes("Pedro"));

// Ordenar alfabéticamente
invitados.sort();
console.log("Ordenado:", invitados);
