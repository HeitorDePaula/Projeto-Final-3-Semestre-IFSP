import {Route, Routes} from 'react-router-dom'

import PaginaInicial from './pages/PaginaInicial'
import Area from './Cliente/Area';
import HomeBarbeiro from './Cliente/HomeBarbeiro';
import Cadastro from './Components/checkout/Checkout';

const Router = () => {
    return(
        <Routes>
               <Route path="/"  element={<PaginaInicial />}/>
                <Route path="/area"  element={<Area />}/>
                <Route path="/home-barbeiro"  element={<HomeBarbeiro />}/>
                <Route path="/cadastro"  element={<Cadastro />}/>
        </Routes>     
    );
};



export default Router;      