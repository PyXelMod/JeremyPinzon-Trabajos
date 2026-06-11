const vehiculo = "motocicleta"
const tarifa = vehiculo === "bicicleta" ? 0 : vehiculo === "motocicleta" ? 15000 : vehiculo === "automovil" ? 30000 : "no tiene vehiculo"

const mensaje = `el vehiculo usado es ${vehiculo} y la tarifa seria de ${tarifa}`;
console.log(mensaje)