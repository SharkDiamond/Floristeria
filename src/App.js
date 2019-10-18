import React from 'react';
import './App.css';

import Principal from './Principal';
import Contacto from './Contacto';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
<Router>



<Route path="/" exact component={Principal}/>

<Route path="/Contacto" exact component={Contacto}/>

</Router>

    </div>
  );
}

export default App;
