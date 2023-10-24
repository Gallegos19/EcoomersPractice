// Admin.jsx
import React, { useState, useEffect } from 'react';
import './Admin.css';
import { getProductos, actualizarProductos } from '../../functions/arreglo'; // Asegúrate de proporcionar la ruta correcta
import ModalEditarProducto from '../../organism/ModalEditar/ModalEditar';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

export default function Admin() {
  const navigate = useNavigate();
  const [listaProductos, setListaProductos] = useState(getProductos());
  const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', precio: 0, img: null });
  const [modalAbierto, setModalAbierto] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    setListaProductos(getProductos());
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'img' && files[0]) {
      const newFile = new File([files[0]], files[0].name, { type: files[0].type });
      setNuevoProducto({ ...nuevoProducto, [name]: newFile });
    } else {
      setNuevoProducto({ ...nuevoProducto, [name]: value });
    }
  };

  const crearProducto = () => {
    if (!nuevoProducto.nombre || nuevoProducto.precio <= 0 || !nuevoProducto.img) {
      alert("Por favor, completa todos los campos antes de crear el producto.");
      return;
    }
    const nuevoId = Math.max(...listaProductos.map(producto => producto.id), 0) + 1;
    const productoCreado = {
      id: nuevoId,
      ...nuevoProducto,
      cantidad: 1
    };
    const nuevaListaDeProductos = [...listaProductos, productoCreado];
    setListaProductos(nuevaListaDeProductos);
    actualizarProductos(nuevaListaDeProductos);
    setNuevoProducto({ nombre: '', precio: 0, img: null });
  };

  const eliminarProducto = (id) => {
    const nuevosProductos = listaProductos.filter(producto => producto.id !== id);
    setListaProductos(nuevosProductos);
    actualizarProductos(nuevosProductos);
  };

  const abrirModalEditar = (producto) => {
    setProductoSeleccionado(producto);
    setModalAbierto(true);
  };

  const guardarCambios = (productoEditado) => {
    const nuevosProductos = listaProductos.map(producto => {
      if (producto.id === productoEditado.id) {
        return productoEditado;
      }
      return producto;
    });
    setListaProductos(nuevosProductos);
    actualizarProductos(nuevosProductos);
    setModalAbierto(false);
  };

  return (
    <div className="admin-container">
      <a onClick={() => navigate("/")}>
        <Button nombre='Volver'/>
      </a>
      <h2>Lista de Productos</h2>
      <ul className="product-list">
        {listaProductos.map(producto => (
          <li key={producto.id} className="product-item">
            {producto.img && <img className="product-image" src={URL.createObjectURL(producto.img)} alt="" />}
            <div className="product-details">
              <span className="product-name">Nombre: {producto.nombre}</span>
              <span className="product-price"> Precio: ${producto.precio}</span>
            </div>
            <div className="product-buttons">
              <button className="edit-button" onClick={() => abrirModalEditar(producto)}>Editar</button>
              <button className="delete-button" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      {modalAbierto && (
        <ModalEditarProducto producto={productoSeleccionado} onClose={() => setModalAbierto(false)} onGuardar={guardarCambios} />
      )}
      <h2>Crear Producto</h2>
      <input className="input-field" type="text" name="nombre" placeholder="Nombre del producto" value={nuevoProducto.nombre} onChange={handleInputChange} />
      <input className="input-field" type="number" name="precio" placeholder="Precio del producto" value={nuevoProducto.precio} onChange={handleInputChange} />
      <input className="input-field" type="file" name="img" onChange={handleInputChange} />
  
      <button className="create-button" onClick={crearProducto}>Crear Producto</button>
    </div>
  );
}
