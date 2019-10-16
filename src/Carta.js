 import React from "react";

 import './App.css';



function Carta(props) {
  return (
    <div className="col-sm-12 col-lg-4">
     


<div className="card mt-4  border rounded border-dark" Style="width: 18rem;">

<img src={props.imagen} className="card-img-top "  alt=""/>


<div class="card-body fondocarta">
    <p class="card-title letra h1 text-center">{props.titulo}</p>
  

  </div>

</div>





    </div>
  );

}

export default Carta;
