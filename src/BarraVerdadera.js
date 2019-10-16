import React, { Component } from 'react'
 import './App.css';
import Barra from "./Barra";
import BarraGrande from "./BarraGrande.js";


export class BarraVerdadera extends Component {



    cambiaColor=()=>{

        document.getElementById("parrafo").className="animacioncolortitulo display-4 font-weight-bold mt-2 ml-4";
        
        
        
        }
        
        estadoCorriente=()=>{
        
          document.getElementById("parrafo").className="letra display-4 font-weight-bold mt-2 ml-4 estadonormal ";
        
        
        
        
        }
        
        




    render() {
        return ( 
            <div className="row fondoBarra">
                <div className="col-1 d-md-none"><Barra/></div>

<div className="col-10 d-md-none">
<p className="display-4 font-weight-bold letra mt-2 ml-3" id="parrafo" onMouseEnter={this.cambiaColor} onMouseOut={this.estadoCorriente}>FlorLoto</p>

</div>



            </div>

        )
    }
}

export default BarraVerdadera
