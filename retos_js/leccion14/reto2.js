// LECCIÓN 14 - RETO 2: Estadísticas de notas
// mejor nota, promedio, aprobados, some/every

const estudiantes = [
  { nombre: "Ana",    nota: 4.5 },
  { nombre: "Bruno",  nota: 2.8 },
  { nombre: "Carla",  nota: 3.6 },
  { nombre: "David",  nota: 3.0 },
  { nombre: "Elena",  nota: 4.9 }
];

// Estudiante con la nota más alta
const mejor = estudiantes.reduce((top, e) => e.nota > top.nota ? e : top);
console.log(`🏆 Mejor nota: ${mejor.nombre} (${mejor.nota})`);

// Promedio del curso
const promedio = estudiantes.reduce((sum, e) => sum + e.nota, 0) / estudiantes.length;
console.log(`📊 Promedio: ${promedio.toFixed(2)}`);

// Aprobados (nota >= 3.0)
const aprobados = estudiantes.filter(e => e.nota >= 3.0);
console.log(`✅ Aprobados (${aprobados.length}):`, aprobados.map(e => e.nombre).join(", "));

// some / every
const hayReprobados = estudiantes.some(e => e.nota < 3.0);
console.log("¿Alguno reprobó?:", hayReprobados);

const todosAprobaron = estudiantes.every(e => e.nota >= 3.0);
console.log("¿Todos aprobaron?:", todosAprobaron);
