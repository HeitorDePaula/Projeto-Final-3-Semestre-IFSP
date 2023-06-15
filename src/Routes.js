import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import PaginaInit from './pages/PaginaInicial';
import Area from './Cliente/Area';
import HomeBarbeiro from './Cliente/HomeBarbeiro';
import Cadastro from './Components/checkout/Checkout';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exect component={ PaginaInit}/>
                <Route path="/Area" component={Area}/>
                <Route path="/HomeBarbeiro" component={HomeBarbeiro}/>
                <Route path="/Cadastro" component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;