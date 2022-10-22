import React from 'react'
import image5 from "./Imagenes/kin3.jpg"
import image6 from "./Imagenes/tec.jpg"
import image7 from "./Imagenes/imagen cobach.jpg"
import image8 from "./Imagenes/secundaria.jpg"
import image9 from "./Imagenes/prima.jpg"
const Escuela = () => {
  return (
    <div><h3>Escuela</h3>
    <p>Actualmente estudio en el Instituto Tecnologico de Comitan 
    </p>
    <div id='image6'>
        <img src={image6} width="500" height="400" />
      </div>
    
    <p>En preparatoria estudie en COBACH plantel 79
    </p>
    <div id='image7'>
        <img src={image7} width="500" height="400" />
      </div>
    <p>En segucundaria estudie en Mi patria es Primero</p>
    <div id='image8'>
        <img src={image8} width="500" height="400" />
      </div>
    <p> En primaria estudie en La aurora </p>
    <div id='image9'>
        <img src={image9} width="500" height="400" />
      </div>
      
      <p>Mi kinder Anastacio Bustamante</p>
      <div id='image5'>
        <img src={image5} width="500" height="400" />
      </div>
    </div>
  )
}

export default Escuela