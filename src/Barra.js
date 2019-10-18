import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
class Barra extends React.Component {
 
ctyles = {
  bmBurgerButton: {
    position: 'relative',
    width: '46px',
    height: '40px',
    left: '12px',
    top: '19px'
  },
  bmBurgerBars: {
  	//COLOR DEL BOTON
    background: 'orange'
  },
  bmBurgerBarsHover: {
    background: 'red'
  },
  bmCrossButton: {
    height: '54px',
    width: '54px'
  },
  bmCross: {
  	//boton para salir del menu
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'

  },
  bmMenu: {
    background: '#444b49',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: 'white'
  },
  bmItemList: {
    color: 'white',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline'
  },
  bmOverlay: {
    background: ''
  }
}

  showSettings (event) {
    event.preventDefault();
   
  }
 
  render () {
    return (
    	<div className="">


      <Menu  styles={this.ctyles} customBurgerIcon={ <img src="https://image.flaticon.com/icons/svg/1152/1152011.svg" alt="" /> } >
        <Link id="home" className="menu-item font-weight-bold text-center colorItemsMenuResponsive" to="./">Inicio</Link>
        <br/>
        <Link id="about" to="/Contacto" className="menu-item font-weight-bold text-center colorItemsMenuResponsive" >Contacto</Link>
        <br/>
        <Link id="contact" to="/Trabajos" className="menu-item font-weight-bold text-center colorItemsMenuResponsive">Trabajos</Link>
        <br/>
      </Menu>


      </div>
    );
  }
}

export default Barra;
