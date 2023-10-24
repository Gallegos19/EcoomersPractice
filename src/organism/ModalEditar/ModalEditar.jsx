import React, { useState } from 'react';

const ModalEditarProducto = ({ producto, onClose, onGuardar }) => {
  const [productoEditado, setProductoEditado] = useState({ ...producto }); // Estado local para el producto editado

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Campo ${name} cambiado a: ${value}`);
    setProductoEditado(prevProductoEditado => ({ ...prevProductoEditado, [name]: value }));
  };

  const handleGuardar = () => {
    // Llama a la función onGuardar con el producto editado y cierra el modal
    onGuardar(productoEditado);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Editar Producto</h2>
      <input type="text" name="nombre" value={productoEditado.nombre} onChange={handleInputChange} />
      <input type="number" name="precio" value={productoEditado.precio} onChange={handleInputChange} />
      <button onClick={handleGuardar}>Guardar</button>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default ModalEditarProducto;
