import '../Style/Area.css'
import logo from '../img/logo.png'
import BannerImage from '../img/banner.png'

const Area = () => {
    return (
        <div className="area-container">
            <div className='area-nav'>
                <img src={logo} width='100px' />
                <button className="area-button">Area do Cliente</button>
            </div>
            <h1 className='area-title'>Barbearia Fácil</h1>
            <div className='area-content'>
                <div className="area-text-section">
                    <h1 className="area-heading">
                        Sobre
                    </h1>
                    <p className="area-text">
                        A Barbearia Fácil é mais do que uma barbearia, A nossa barbearia é também um lugar onde o homem pode ter seu momento para relaxar, tomar uma boa cerveja e ficar a vontade jogando conversa fora com seus amigos.
                    </p>

                    <p className="area-text">
                        Fundada em 2000, nossa primeira unidade no bairro de Pituba em Salvador, Nós mantemos uma tradição de entregar sempre o melhor atendimento e serviço, nossos barbeiros são qualificádos para oferecer uma experiência incrível, massageador de barba, toalhas quentes, acabamento perfeito. Aqui não aceitamos cliente insatisfeito.
                    </p>
                </div>
                <div className='area-agenda'>
                    <h1>Agenda</h1>
                    <select id="area-select">
                        <option value="">Selecione uma opção</option>
                    </select>
                    <select id="area-select">
                        <option value="">Selecione uma opção</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Area