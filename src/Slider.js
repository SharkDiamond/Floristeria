import React, { Component } from 'react'
import './App.css';


export default class Slider extends Component {
    
    constructor(){
super();

this.state={

numero:0


}


    }


 imagen=["https://http2.mlstatic.com/flores-en-cartulina-gigantes-decoracion-fiesta-unicornio-D_NQ_NP_855062-MLV27027051290_032018-F.jpg","https://www.ohfiestas.com/images/decoracion-monograma-de-flores-1.jpg","https://http2.mlstatic.com/flores-medianas-40cm-decoracion-fiestas-bodas-15anos-cumplea-D_NQ_NP_982865-MCO27536600711_062018-F.jpg"];


    CambiaImagen=()=>{




this.setState(prevState => {


    return { numero: prevState.numero + 1};



  });


if(this.state.numero===2){

this.setState({

numero:0


})



}



    }
    


    Cambiaefectos=()=>{
        document.getElementById("imagen").className="img-fluid tamaño rounded";

    }
    
    efectosDefault=()=>{

        document.getElementById("imagen").className="img-fluid tamañodefaultimagen";



    }
    
    render() {




        return (
            <div className="text-center">
                
<img src={this.imagen[this.state.numero]} alt="" id="imagen" className="img-fluid tamañodefaultimagen"  onClick={this.CambiaImagen} onMouseEnter={this.Cambiaefectos} onMouseOut={this.efectosDefault}/>
<br/>

            </div>
        )
    }
}
