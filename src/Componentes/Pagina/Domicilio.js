import React from 'react'
import imagep from "./Imagenes/domici.jpg"
const Domicilio = () => {
  return (
    <div><h3>Domicilio</h3>
    
    
    <p>
    Vivo en Comitan de Dominguez Chiapas, en Barrio la Cueva sobre la calle cuarta norte poniente
    </p>
    
    <div id='imagep'>
        <img src={imagep} width="500" height="400" />
      </div>

    </div>
  )
}

export default Domicilio