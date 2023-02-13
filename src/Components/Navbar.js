import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


class Navbar extends Component {
    state = {  } 
    render() { 
        return (

          <>
          
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark navborder">
          <li className="nav-item active">
                  <Link className="nav-link tamalogo navbar-brand" to="/"> <img className='imgcard' src={logo}/><span class="sr-only">(current)</span></Link>
                </li>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/Contacto">Contacto <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/Curso">Curso <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/Formulario1">Empleados <span class="sr-only">(current)</span></Link>
                </li>
            
             
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <button class="glow-on-hover btn btn-outline-success my-2 my-sm-0" type="submit">Solicitar mas Infomormacion</button>
            </form>
          </div>
        </nav>

          
          
        </>

        );
    }
}
 
export default Navbar;