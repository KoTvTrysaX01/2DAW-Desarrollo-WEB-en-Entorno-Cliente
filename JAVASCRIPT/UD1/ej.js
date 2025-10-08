let carrito = [
 { producto: "Camiseta", precio: 20 },
 { producto: "Pantalón", precio: 40 },
 { producto: "Zapatos", precio: 60 }
];
// Total a pagar
let total = carrito.reduce((suma, item) => suma + item.precio, 0);
console.log(`Total: $${total}`); // Total: $120
// Productos caros (>30)
let caros = carrito.filter(item => item.precio > 30);
console.log(caros); // [{producto: "Pantalón", ...}, {producto: "Zapatos", ...}]
// Nombres de productos
let nombres = carrito.map(item => item.producto);
console.log(nombres); // ["Camiseta", "Pantalón", "Zapatos"]
