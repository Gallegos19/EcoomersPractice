import React from 'react'
import style from './Imagen.css'
export default function Imagen(props) {
  return (
    <div  className='containerImg'>
        <img src={props.img} alt="" />
    </div>
  )
}
