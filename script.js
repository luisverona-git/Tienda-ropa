const productos = [
    { id: 1, nombre: "Polera Oversize Signature", precio: 14990 },
    { id: 2, nombre: "Polera Essential Drop", precio: 16990 },
    { id: 3, nombre: "Pantalón Cargo Street Fit", precio: 24990 },
    { id: 4, nombre: "Pantalón Jogger Black Form", precio: 27990 },
    { id: 5, nombre: "Zapatillas Urban Pulse 01", precio: 59990 },
    { id: 6, nombre: "Zapatillas Street Motion 02", precio: 64990 }
    ];
    
    let carrito = [];
    
    function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    alert(`Agregaste "${producto.nombre}" a tu selección.\nTotal acumulado: $${calcularTotal()}`);
    }
    
    function calcularTotal() {
    let total = 0;
    carrito.forEach(item => total += item.precio);
    return total.toLocaleString('es-CL');
    }