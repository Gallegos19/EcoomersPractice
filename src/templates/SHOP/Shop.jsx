import React from 'react'
import Nav from '../../organism/Nav/Nav'
import ContenedorCard from '../../organism/ContenedorCards/ContenedorCard'
import style from './Shop.css'
export default function Shop() {
  return (
    <div className='ContainerShop'>
        <div className='nav'>
        <Nav />
        </div>
        <center><h2>Tienda</h2></center>
        <div className='card'>
        <ContenedorCard />
        </div>
    </div>
  )
}
