const cuentaactiva = true;
const edad = 18;
const vip = true;

if (cuentaactiva === true && edad >= 18) {
    console.log("puede pasar")
} else if (vip === true) {
    console.log("puede pasar como administrador")
} else {
    console.log("no puede pasar")
}