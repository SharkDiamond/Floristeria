import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';

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
        <a id="home" className="menu-item font-weight-bold text-center colorItemsMenuResponsive" href="/">Inicio</a>
        <br/>
        <a id="about" className="menu-item font-weight-bold text-center colorItemsMenuResponsive" href="/about">Contacto</a>
        <br/>
        <a id="contact" className="menu-item font-weight-bold text-center colorItemsMenuResponsive" href="/contact">Trabajos</a>
        <br/>
      </Menu>


      </div>
    );
  }
}

export default Barra;
