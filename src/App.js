
import './App.css';
import Router from './Router';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contacto from './Pages/Contacto';
import Curso from './Pages/Curso';
//importaciones

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/Curso' element={<Curso/>}/>

            

        </Routes>
       
        <Footer/>
    </div>
  );
}

export default App;
