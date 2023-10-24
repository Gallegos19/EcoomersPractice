// Card.js

import React from 'react';
import './Card.css';
import Imagen from '../../atoms/Imagen/Imagen';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import { carrito, agregarAlCarrito } from '../../functions/ArrayCarrito';

export default function Card(props) {
  const handleClick = () => {
    agregarAlCarrito(props); // Agrega el producto al carrito
    console.log('Carrito actual:', carrito);
  };

  return (
    <div className='containerCard'>
      <Imagen img={props.img} />
      <Subtitle text={props.titulo} />
      <Text text={`precio: ${props.precio}`} />
      <div onClick={handleClick}>
        <Button nombre='Agregar'  />
      </div>
    </div>
  );
}
