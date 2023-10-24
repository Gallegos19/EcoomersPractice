import React from 'react';
import style from './ContenedorCard.css';
import Card from '../../molecules/Card/Card';
import img from '../../assets/react.svg';
import {getProductos} from '../../functions/arreglo';

export default function ContenedorCard() {
    const productos = getProductos();
  return (
    <div className='ContainerCard'>
      {productos.map((producto, index) => (
        <Card key={index} img={producto.img} titulo={producto.nombre} precio={producto.precio} />
      ))}
    </div>
  );
}
