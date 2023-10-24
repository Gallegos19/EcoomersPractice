import React from 'react'
import style from './Nav.css'
import Title from '../../atoms/Title/Title'
import Subtitle from '../../atoms/Subtitle/Subtitle'
import CarroCompras from '../../molecules/CarroCompras/CarroCompras'
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate();
  return (
    <div className='ContainerNav'>
        <div className='section1'>
        <a onClick={() => navigate("/")} style={{color:'white'}} >
        <Title text='UPVentas'/>
        </a>
        </div>
        <div className='section2'>
            <div className='Admin'  style={{cursor:'pointer'}}>
            <a onClick={() => navigate("/Admin")}  style={{color:'white'}}>
            <Subtitle text= 'Admin'/>
            </a>
            </div>
            <div>
            <CarroCompras />
            </div>
        </div>
        
    </div>
  )
}
