import '../Style/Area.css'
import logo2 from '../img/logo2.png'
import Banner2 from '../img/banner2.png'
import Calendario from '../Components/calendario'
import Seta from '../Components/seta'
import Pessoa from '../Components/person'

const Area = () => {
    return (
        <div className="area-container">
            <div className='area-nav'>
                <img src={logo2} width='100px' />
               <button className="area-button3"><a href='./HomeBarbeiro' className='a2'><Pessoa/> Area do Cliente</a></button>
            </div>
            <h1 className='area-title'>Barbearia &ensp;<span>ArmazZém</span></h1>
            <div className='area-content'>
                <div className="area-text-section">
                    <h1 className="area-heading">
                       <span><Seta/></span> Sobre
                    </h1>
                    <p className="area-text">
                        A <span>Barbearia ArmazZém</span> é mais do que uma barbearia, A <span>ArmazZém</span> é também um lugar onde o homem pode ter seu momento para relaxar, tomar uma boa cerveja e ficar a vontade jogando conversa fora com seus amigos.
                    </p>

                    <p className="area-text">
                        Fundada em <span>2000</span>, nossa primeira unidade no bairro de <span>Pituba</span> em Salvador, Nós mantemos uma tradição de entregar sempre o melhor atendimento e serviço, nossos barbeiros são qualificádos para oferecer uma experiência incrível, massageador de barba, toalhas quentes, acabamento perfeito. Aqui não aceitamos cliente insatisfeito.
                    </p>
                    <img id='img' src={Banner2}/>
                </div>
                <div className='area-agenda'>
                    <h1><span><Seta/></span> Agenda</h1>
                        <p className='area-p'>Unidade</p>
                    <select id="area-select">
                        <option value="">Selecione á unidade</option>
                    </select>
                        <p className='area-p'>Serviço</p>
                    <select id="area-select">
                        <option value="">Selecione o Serviço</option>
                    </select>
                    <div className='area-button'>
                        <div className='area-flex'>
                            <p className='area-p'>Data e Hora</p>
                            <select id="area-select2">
                            <option value="">Selecione uma Data</option>
                            </select>

                        </div>
                        <div className='area-flex'>
                            <p className='area-p'>Preferencia de Funcionario</p>
                        <select id="area-select2">
                            <option value="">Selecione um Funcionario</option>
                        </select>
                        </div>

                       
                        <button className='area-button2'><Calendario/> Agendar</button>
                    </div>

                    <p className='area-p-armazzen'>Porque agendar com a ArmazZém ?</p>

                    <div className='area-armazzen'>
                        <div className='area-card'>
                            <p className='area-p-armazzen2'>Existimos desdê:</p>
                            <a>1920</a>
                        </div>
                        <div className='area-card'>
                            <p className='area-p-armazzen2'>Clientes Satisfeitos:</p>
                            <a>999</a>
                        </div>
                        <div className='area-card'>
                            <p className='area-p-armazzen2'>Estamos com:</p>
                            <a>30</a>
                            <p className='area-p-armazzen2'>Unidades</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Area