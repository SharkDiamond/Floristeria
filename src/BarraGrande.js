import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";


export default class BarraGrande extends Component {
    render() {
        return (
            <div className="d-none d-md-block fondoGris row">
            
            <div className="col-12">
            <nav class="navbar  navbar-expand-md">
 
 
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active letra h2" to="./">Inicio <span class="sr-only">(current)</span></Link>
      <Link to="/Trabajos" class="nav-item nav-link letra h2" href="#">Trabajo</Link>
      <Link to="/Contacto" class="nav-item nav-link letra h2" href="#">Contacto</Link>
    </div>
  </div>
</nav>
</div>
            </div>
        )
    }
}
