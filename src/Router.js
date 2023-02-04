import React, {Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

//componetes
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';

class Router extends Component {
    
   
    render() { 
        return ( 
            
            <BrowserRouter>

            
            <Navbar/>
            <Route  path='/' component={Home}/>
            
            

         
            <Footer/>
            </BrowserRouter>

         );
    }
}
 
export default Router;