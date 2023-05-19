import React from "react";
import Logo from '../img/logo2.png';
import '../Style/hbarber.css';
 

const HomeBarbeiro = () =>{
    return(
        <div>
        <div className="Container">
            <img src={Logo} alt="" />
            <button className="int">Sair</button>
        </div><br/>
        <div className="texto">
            <h2>Bem Vindo, <span>Gabriel</span> !</h2>
        </div>
        <div className="Container">
            <h3>Meus Agendamentos:</h3>
            <button className="int"><Calendario/>Agendar</button>
        </div>
        <div className="cards">
            <div className="card1">
                <p>Casa Branca - <span>4101</span></p>
                <p className="hora">17/02 - 14:00 </p>
                <div className="aceitar">
                    <button className="rec"><Lixeira/> Desitir</button>
                    <button className="rec1"><Relogio/> Alterar Horario</button>
                </div>
            </div>
            <div className="card2">
                 <p>Casa Branca - <span>4101</span></p>
                 <p className="hora">17/02 - 14:00 </p>
                 <div className="aceitar">
                    <button className="rec"><Lixeira/> Desitir</button>
                    <button className="rec1"><Relogio/> Alterar Horario</button>
                </div>
            </div>
            <div className="card3">
                <p>Casa Branca - <span>4101</span></p>
                <p className="hora">17/02 - 14:00 </p>
                <div className="aceitar">
                    <button className="rec"><Lixeira/> Desitir</button>
                    <button className="rec1"><Relogio/> Alterar Horario</button>
                </div>
            </div>
        </div>
        <button className="reps"><Calendario/>Agendar</button>
        <button className="reps" >Sair</button>
        </div>
    )

};

export default HomeBarbeiro;