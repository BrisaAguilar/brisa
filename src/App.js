import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Componentes/Navegador/Navbar'

import Fotos from './Componentes/Pagina/Fotos'
import Domicilio from './Componentes/Pagina/Domicilio'
import Escuela from './Componentes/Pagina/Escuela'
import Informacion from './Componentes/Pagina/Informacion'

function App() {
  return (
    <div className="App">
   <Router>
   <Navbar/>
   <Routes>
   <Route path='/' exact element={<Informacion/>}/>
   <Route path='/Fotos' element={<Fotos/>}/>
   <Route path='/Escuela' element={<Escuela/>}/>
   <Route path='/Domicilio' element={<Domicilio/>}/>
 
   </Routes>
   </Router>
    </div>
  );
}

export default App;