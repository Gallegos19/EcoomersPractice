// ArrayCarrito.js

const carrito = [];

function agregarAlCarrito(producto) {
  const productoExistente = carrito.find(item => item.titulo === producto.titulo);

  if (productoExistente) {
    // Si el producto ya existe en el carrito, aumenta la cantidad en 1
    productoExistente.cantidad += 1;
    console.log('Cantidad del producto incrementada:', productoExistente);
  } else {
    // Si el producto no existe en el carrito, agrégalo al carrito con cantidad 1
    const nuevoProducto = { ...producto, cantidad: 1 }; // Clonamos el producto antes de agregarlo al carrito
    carrito.push(nuevoProducto);
    console.log('Producto agregado al carrito:', nuevoProducto);
  }
}
function eliminarDelCarrito(titulo) {
    const indice = carrito.findIndex(item => item.titulo === titulo);
    if (indice !== -1) {
      carrito.splice(indice, 1);
      console.log('Producto eliminado del carrito:', titulo);
    }
  }
  
  function actualizarCantidad(titulo, nuevaCantidad) {
    const productoExistente = carrito.find(item => item.titulo === titulo);
    if (productoExistente) {
      productoExistente.cantidad = nuevaCantidad;
  
      // Si la cantidad es menor o igual a 0, eliminar el producto del carrito
      if (productoExistente.cantidad <= 0) {
        eliminarDelCarrito(titulo);
      }
  
      console.log('Cantidad del producto actualizada:', productoExistente);
    }
  }
  export { carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad };