
import './App.css';
import Router from './Router';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contacto from './Pages/Contacto';
import Curso from './Pages/Curso';
import Formulario1 from './Components/Formulario1'
//importaciones

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/Curso' element={<Curso/>}/>
            <Route path='/Formulario1' element={<Formulario1/>}/>


            

        </Routes>
       
        <Footer/>
    </div>
  );
}

export default App;
