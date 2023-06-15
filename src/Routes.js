import React from "react";
import {Route, Routes} from 'react-router-dom'

import App from './pages/PaginaInicial';
import Area from './Cliente/Area';
import HomeBarbeiro from './Cliente/HomeBarbeiro';
import Cadastro from './Components/checkout/Checkout';

const Router = () => {
    return(
        <Routes>
               <Route path="/"component={App}/>
                <Route path="/Area" component={Area}/>
                <Route path="/HomeBarbeiro" component={HomeBarbeiro}/>
                <Route path="/Cadastro" component={Cadastro}/>
        </Routes>     
    );
};

export default Router;