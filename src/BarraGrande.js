import React, { Component } from 'react';
import './App.css';



export default class BarraGrande extends Component {
    render() {
        return (
            <div className="d-none d-md-block fondoGris row">
            
            <div className="col-12">
            <nav class="navbar  navbar-expand-md">
 
 
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active letra h2" href="#">Inicio <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link letra h2" href="#">Trabajo</a>
      <a class="nav-item nav-link letra h2" href="#">Contacto</a>
    </div>
  </div>
</nav>
</div>
            </div>
        )
    }
}
