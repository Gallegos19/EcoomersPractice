import React from "react";
import "./ContenedorCarro.css"; // Estilo para el carrito (ContenedorCarro.css)

const ContenedorCarro = ({
  carrito,
  onEliminarProducto,
  onActualizarCantidad,
  onClose,
}) => {
  return (
    <div className="carrito-container">
      <div className="carrito-header">
        <h2>Carrito de Compras</h2>
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
      <ul className="carrito-lista">
        {carrito.map((item, index) => (
          <li key={index}>
            {item.img && typeof item.img === "string" ? (
              <img src={item.img} alt={item.titulo} />
            ) : item.img && item.img instanceof File ? (
              <img src={URL.createObjectURL(item.img)} alt={item.titulo} />
            ) : null}{" "}
            <span>{item.titulo}</span>
            <span>Cantidad: {item.cantidad}</span>
            <button
              onClick={() =>
                onActualizarCantidad(item.titulo, item.cantidad + 1)
              }
            >
              +
            </button>
            <button
              onClick={() =>
                onActualizarCantidad(item.titulo, item.cantidad - 1)
              }
            >
              -
            </button>
            <button onClick={() => onEliminarProducto(item.titulo)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContenedorCarro;
