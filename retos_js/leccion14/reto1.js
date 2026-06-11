// LECCIÓN 14 - RETO 1: Análisis de productos
// filter (stock > 0), map (nombres en mayúsculas), reduce (valor total inventario)

const productos = [
  { nombre: "Teclado",  precio: 80000,  stock: 5 },
  { nombre: "Mouse",    precio: 45000,  stock: 0 },
  { nombre: "Monitor",  precio: 650000, stock: 3 },
  { nombre: "Webcam",   precio: 120000, stock: 8 },
  { nombre: "Audífonos",precio: 95000,  stock: 0 }
];

// Productos disponibles
const disponibles = productos.filter(p => p.stock > 0);
console.log("Disponibles:", disponibles.map(p => p.nombre));

// Nombres en mayúsculas
const nombres = disponibles.map(p => p.nombre.toUpperCase());
console.log("Nombres (mayúsculas):", nombres);

// Valor total del inventario
const valorInventario = disponibles.reduce((total, p) => total + p.precio * p.stock, 0);
console.log(`Valor total inventario: $${valorInventario.toLocaleString("es-CO")}`);
