import img from '../assets/react.svg'
let productos = [
    {
      id: 1,
      nombre: "Producto 1",
      img: img,
      precio: 19.99,
      cantidad: 1
    },
    {
      id: 2,
      nombre: "Producto 2",
      img: img,
      precio: 24.99,
      cantidad: 1
    },
    {
      id: 3,
      nombre: "Producto 3",
      img: img,
      precio: 14.99,
      cantidad: 1
    },
    {
        id: 4,
        nombre: "Producto 4",
        img: img,
        precio: 14.99,
        cantidad: 1
      },
      {
        id: 5,
        nombre: "Producto 5",
        img: img,
        precio: 12.99,
        cantidad: 1
      },
      {
        id: 6,
        nombre: "Producto 6",
        img: img,
        precio: 16.99,
        cantidad: 1
      },
      {
        id: 7,
        nombre: "Producto 7",
        img: img,
        precio: 19.99,
        cantidad: 1
      },
      {
        id: 8,
        nombre: "Producto 8",
        img: img,
        precio: 11.99,
        cantidad: 1
      },
      {
        id: 9,
        nombre: "Producto 9",
        img: img,
        precio: 11.99,
        cantidad: 1
      }, 
      {
        id: 10,
        nombre: "Producto 10",
        img: img,
        precio: 1.99,
        cantidad: 1
      },
  ];
  
 export function getProductos() {
    return productos;
  }
  
 export function actualizarProductos(nuevosProductos) {
    productos = nuevosProductos;
  }
