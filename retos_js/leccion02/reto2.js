// LECCIÓN 02 - RETO 2: Validación de acceso
// El sistema deja entrar si: (mayor de edad Y cuenta activa) O es administrador

// Combinación 1
let esMayorDeEdad = true;
let cuentaActiva = true;
let esAdministrador = false;
let puedeEntrar = (esMayorDeEdad && cuentaActiva) || esAdministrador;
console.log(`Mayor:${esMayorDeEdad} | Activa:${cuentaActiva} | Admin:${esAdministrador} → puedeEntrar: ${puedeEntrar}`);

// Combinación 2
esMayorDeEdad = false;
cuentaActiva = true;
esAdministrador = false;
puedeEntrar = (esMayorDeEdad && cuentaActiva) || esAdministrador;
console.log(`Mayor:${esMayorDeEdad} | Activa:${cuentaActiva} | Admin:${esAdministrador} → puedeEntrar: ${puedeEntrar}`);

// Combinación 3
esMayorDeEdad = false;
cuentaActiva = false;
esAdministrador = true;
puedeEntrar = (esMayorDeEdad && cuentaActiva) || esAdministrador;
console.log(`Mayor:${esMayorDeEdad} | Activa:${cuentaActiva} | Admin:${esAdministrador} → puedeEntrar: ${puedeEntrar}`);
