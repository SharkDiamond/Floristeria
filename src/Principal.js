import React from "react";
import './App.css';

import Carta from './Carta';
import Slider from './Slider';
import Mapa from './Mapa';
import Footer from "./Footer";
import BarraVerdadera from "./BarraVerdadera";
import BarraGrande from "./BarraGrande";
class Principal extends React.Component {

constructor(){

super();

this.state={


imagen:"",
clase:"pequeño",
clase2:"pequeño",
clase3:"pequeño"

}


}

imagen=()=>{


this.setState({

imagen:"https://www.jardineriaon.com/wp-content/uploads/2018/04/flores-decorativas-y-vistosas.jpg",
clase:"grande1 img-fluid rounded-circle"


})
}


imagenessecciondos=()=>{

  this.setState({

    clase2:"grande img-fluid rounded"
    
    
    })


}


imagensecciontres=()=>{
  this.setState({

    clase3:"grande1 img-fluid rounded-circle"
    
    
    })
  
  }


render(){

const parrafo=<p className="letra">lodfnsfndvsnvsivnsvnesdfnfdvnvd</p>;

return(
  <div className="container-fluid">
     
    <BarraVerdadera/> 
<BarraGrande/>


<div className="row">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          


<div className="col-12 fondoimagen">


<br/>

<p className="display-4  text-center letratitulo d-sm-inline d-md-none">Bienvenido a FlorLoto</p>
<br/>

<p className="display-1 text-center letratitulo d-none d-md-block ">Bienvenido a FlorLoto</p>
<br/>

<br/>
<br/>

<br/>
<br/>
<br/>
<br/>
<br/>

</div>
</div>



<div className="row">

<div className="col-12">

<p className="fondo display-4 font-weight-bold text-center segundaletra mt-4">Celebra tus momentos especiales como:</p>

</div>

</div>

<div className="row justify-content-center">

<div className="">
<Carta imagen="https://www.dhresource.com/0x0s/f2-albu-g10-M00-30-D5-rBVaVlw0De2AB5qZAAJoJPitYJg634.jpg/diy-artesan-a-fiesta-de-cumplea-os-flor-de.jpg" titulo="Cumpleaños" />
</div>

<div className="">
<Carta imagen="https://castanerflores.es/wp-content/uploads/2019/01/floristeria-castaner-rosas-rojas-ramo-de-rosas-rojas-para-san-valentin-ramo-de-flores-14-de-febrero-1.jpg" titulo="Aniversarios"/>
</div>


<div className="">
<Carta imagen="https://http2.mlstatic.com/juego-de-decoracion-de-kwayi-baby-shower-tema-de-oro-rosa-d-D_NQ_NP_866503-MLM28745557548_112018-F.jpg" titulo="Baby Showers"/>
</div>
 

</div>


<div className="row justify-content-center mb-3">

<div className="col-12">

<p className="fondo display-4 font-weight-bold text-center segundaletra mt-3">con la mejor decoracion.</p>

</div>

</div>

<div className="row justify-content-center mb-3">

<div className="col-12">


<Slider/>

</div>

</div>

<div className="container">
<div className="row text-center p-4">

<div className="col-12 p-3  border rounded border-dark mb-5 bg-dark " >

<p className="letra h1" onMouseEnter={this.imagen} onMouseOut={this.imagendos}>Todo tipo de flores contamos con una gran variedad.</p>
<img src={this.state.imagen} className={this.state.clase}/>
<img src="https://image.dhgate.com/0x0p/f2/albu/g6/M00/DC/0B/rBVaSFul_MGAMhE1AAF-fZVNkvA287.jpg" className={this.state.clase}/>
<img src="https://www.dhresource.com/0x0s/f2-albu-g2-M00-98-25-rBVaGloLC_CAXxrUAALfyAyEUtQ560.jpg/10-unids-belleza-real-toque-tulipanes-flores.jpg" className={this.state.clase}/>
<img src="http://hablemosdeflores.com/wp-content/uploads/2017/07/violeta-4.jpg" className={this.state.clase}/>
<img src="https://i.pinimg.com/originals/0b/d0/3f/0bd03f9babae2cddf0be1980f0d1e2a5.jpg" className={this.state.clase}/>
<img src="https://cdn.pixabay.com/photo/2017/08/13/16/58/flower-2637796_960_720.jpg" className={this.state.clase}/>
</div>


<div className="col-12 p-3 border rounded border-dark mb-5 bg-dark">


<p className="letra h2" onMouseEnter={this.imagenessecciondos} onMouseOut={this.imagendos}>Tenemos una gran variedad de sucursales en todo el pais Barinas, Merida, Caracas y Puerto La Cruz.</p>

<img src="http://www.floristeriaolimpia.com/2016/foto%20tienda%202.jpg" className={this.state.clase2}/>
<img src="http://www.zoomin.es/barcelona/eixample/directorio/eixampleesquerra/HOGAR_floristeria_sky_rose/sky_rose_zoomin1.jpg" className={this.state.clase2}/>
<img src="https://www.mybarrio.es/wp-content/uploads/2018/08/casaprotea2-600.jpg" className={this.state.clase2}/>
<img src="https://e00-telva.uecdn.es/assets/multimedia/imagenes/2019/03/26/15535976046909.jpg" className={this.state.clase2}/>

</div>

<div className="col-12 p-3 border rounded border-dark mb-5 bg-dark">

<p className="letra h1" onMouseEnter={this.imagensecciontres}>Ademas de decoraciones tambien hacemos reposteria cucapceks, tortas y pasapalos.</p>

<img src="https://i.pinimg.com/originals/96/12/8b/96128b03c2a4d45fdeaa231614e99d1f.jpg" className={this.state.clase3}/>
<img src="https://cdn.shopify.com/s/files/1/1044/8640/files/torta_variada1_1_large.jpg?v=1541540938" className={this.state.clase3}/>
<img src="https://hablemosdeculturas.com/wp-content/uploads/2017/10/Pasapalos-venezolanos-2.jpg" className={this.state.clase3}/>
<img src="https://http2.mlstatic.com/el-mas-completo-curso-de-recetas-picadas-copetin-salsas-D_NQ_NP_884985-MLA26104444907_102017-F.jpg" className={this.state.clase3}/>




</div>

</div>
</div>

<Footer/>


    </div>	);




}


}
export default Principal;