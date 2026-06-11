// LECCIÓN 15 - RETO 1: Agenda telefónica con Map

const agenda = new Map();

// Agregar 5 contactos
agenda.set("Ana Torres",    "311-234-5678");
agenda.set("Bruno Gómez",   "320-987-6543");
agenda.set("Carla Ruiz",    "315-456-7890");
agenda.set("David Mora",    "318-321-0987");
agenda.set("Elena Castro",  "304-654-3210");

// get: obtener 2 teléfonos
console.log("Ana Torres:", agenda.get("Ana Torres"));
console.log("David Mora:", agenda.get("David Mora"));

// has: verificar si existe Pedro
console.log("¿Existe Pedro?:", agenda.has("Pedro"));

// delete: eliminar un contacto
agenda.delete("Bruno Gómez");
console.log("Tras eliminar Bruno Gómez:");

// forEach: recorrer toda la agenda
agenda.forEach((telefono, nombre) => {
  console.log(`  ${nombre} → ${telefono}`);
});

console.log("Total contactos:", agenda.size);
