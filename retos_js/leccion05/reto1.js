// LECCIÓN 05 - RETO 1: Día de la semana con switch
// 1=Lunes ... 7=Domingo

const numeros = [1, 4, 7, 9]; // tres válidos + uno inválido para probar

numeros.forEach(numero => {
  let dia;
  switch (numero) {
    case 1: dia = "Lunes";     break;
    case 2: dia = "Martes";    break;
    case 3: dia = "Miércoles"; break;
    case 4: dia = "Jueves";    break;
    case 5: dia = "Viernes";   break;
    case 6: dia = "Sábado";    break;
    case 7: dia = "Domingo";   break;
    default: dia = "Día inválido";
  }
  console.log(`${numero} → ${dia}`);
});
