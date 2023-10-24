import React, { useState, useEffect } from 'react';
import Carrito from '../../atoms/Carrito/Carrito';
import { carrito as carritoArray, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad } from '../../functions/ArrayCarrito';
import ContenedorCarro from '../../organism/ContenedorCarroCompras/ContenedorCarro';

export default function CarroCompras() {
  const [carrito, setCarrito] = useState(carritoArray);
  const [contador, setContador] = useState(carrito.length);
  const [mostrarContenedorCarro, setMostrarContenedorCarro] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const sumaCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
      setContador(sumaCantidad);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [carrito]);

  const handleClickCarrito = () => {
    setMostrarContenedorCarro(!mostrarContenedorCarro);
  };

  const eliminarProducto = (titulo) => {
    eliminarDelCarrito(titulo);
    setCarrito([...carritoArray]);
  };
  

  const actualizarCantidadProducto = (titulo, nuevaCantidad) => {
    actualizarCantidad(titulo, nuevaCantidad);
    setCarrito([...carritoArray]);
  };

  const handleCloseCarro = () => {
    setMostrarContenedorCarro(false);
  };

  return (
    <div className='ContainerCarro' > 
      <div style={{display:'flex',justifyContent:'right'}} onClick={handleClickCarrito}>
       <p style={{display:'flex',justifyContent:'center',borderRadius:'100%',width:'20px',backgroundColor:'red'}} >{contador > 9 ? '9+' : contador}</p>
       </div>
       <Carrito />
       {mostrarContenedorCarro && 
         <ContenedorCarro 
           carrito={carrito} 
           onEliminarProducto={eliminarProducto} 
           onActualizarCantidad={actualizarCantidadProducto} 
           onClose={handleCloseCarro} 
         />
       }
    </div>
  );
}
