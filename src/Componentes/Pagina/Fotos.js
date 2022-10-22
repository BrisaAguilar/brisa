import React from 'react'
import image from "./Imagenes/ejercicio.webp"
import image1 from "./Imagenes/musica.jpg"
import image2 from "./Imagenes/rick.jpg"
const Fotos = () => {
  return (
    <div><h3>Fotos</h3>
    
    <br></br>
    <br></br>
    <p><h4>Aqui muestro mis Pasa tiempos!</h4>
    
    </p>
    <section>
    <div id='image'>
        <img src={image} width="500" height="400" />
      </div>
      </section>
<p> <h4>hacer ejercicio</h4>
<br></br>
<br></br>
<div id='image1'>
        <img src={image1} width="500" height="400" />
      </div>
</p>
<p> <h4>escuchar musica</h4>
<br></br>
    <br></br>
<div id='image2'>
        <img src={image2} width="500" height="400" />
      </div>
      <h4>Ver peliculasy series favoritas</h4>
</p>

    
    </div>
  )
}

export default Fotos