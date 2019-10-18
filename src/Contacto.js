import React, { Component } from 'react'
import Footer from "./Footer";
import BarraVerdadera from "./BarraVerdadera";
import BarraGrande from "./BarraGrande";
import './App.css';
export default class Contacto extends Component {
    render() {
        return (
            <div className="container-fluid">
                

<BarraVerdadera/>
<BarraGrande/>

<div className="row">

<div className="col-12">

<p className="display-1 d-none d-md-block text-center letratitulo ">Ubicaciones</p>


<p className="display-4 d-md-none text-center letratitulo ">Ubicaciones</p>



</div>

<br/>

</div>


<div className="row">
<br/>
<br/>
<div className="col-sm-12 col-lg-3 col-md-6">
<p className="display-4 text-center letratitulo">Caracas</p>

<img src="https://images.clarin.com/2019/05/30/google-maps-muestra-la-ubicacion___qV2WQlVoQ_1256x620__1.jpg" className="img-fluid " alt=""/>


</div>


<div className="col-sm-12 col-lg-3 col-md-6">
<p className="display-4 text-center letratitulo">Puerto la Cruz</p>

<img src="https://kbwn74rg0y3uboil4cj8gprr-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/google-maps-1.png" className="img-fluid " alt=""/>


</div>


<div className="col-sm-12 col-lg-3 col-md-6">

<p className="display-4 text-center letratitulo">Barinas</p>

<img src="https://articles-images.sftcdn.net/wp-content/uploads/sites/9/2014/09/43-568x320.png" className="img-fluid " alt=""/>

</div>


<div className=" col-sm-12 col-lg-3 col-md-6">


<p className="display-4 text-center letratitulo">Merida</p>


<img src="http://www.androidjefe.com/wp-content/uploads/2013/12/historial-de-ubicaciones-android.jpg" className="img-fluid " alt=""/>


</div>


</div>



<div className="row">
<div className="col-12">
<p className="display-1 text-center letratitulo">Envianos un Correo</p>
</div>
</div>

<div className="row justify-content-center">

<div className="col-xl-6 col-md-8 col-sm-12 text-center">

<form className="form">
<div className="form-row ">

<input type="text" placeholder="Nombre" className="form-control"/>

<br/>

<br/>
<input type="text" placeholder="Apellido" className="form-control"/>
<br/>

<br/>
<textarea className="form-control mb-3" placeholder="Indicanos que es lo que quieres."></textarea>


<input type="submit" placeholder="Enviar" className="btn btn-dark text-center form-control offset-4 col-4"/>

</div>

</form>

</div>
</div>




<div className="mt-3"></div>

<Footer/>



            </div>
        )
    }
}
