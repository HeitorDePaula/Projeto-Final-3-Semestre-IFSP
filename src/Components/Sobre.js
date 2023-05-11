import Homi from '../img/homi.png'
import '../Style/Sobre.css'


function Sobre() {
    return (
        <div className='content-sob'>
            <h1 className='chamariz'>Sobre Nós</h1>
            <div className='container-sob'>
                <img src={Homi} />
                <div className='alinh'>
                    <h1>➜ Quem somos?</h1>
                    <p>°Idade -area cliente: 16 a 31 anos -area adm: 20 a 30 anos °Sexo -area cliente: Masculino -area adm: Masculino °Estado Civil -area cliente: Solteiro -area adm: Casado °Formação Educação -area cliente: Ensino médio completo -area adm:Ensino médio completo especialização Curso barbeiro reconhecido pelo MEC °Poder Aquisitivo -area cliente: 1500 a 5000 -area adm: 5000 a 15000 °Classe</p>
                    <h1>➜ Nossa Missão</h1>
                    <p>Social -area cliente: Classes A, B e C -area adm: Classe B °Localização -area cliente: Brasil -area adm: Brasil °Hábitos de Consumo -area cliente: Gel para o cabelo, Pomada capilar, Pente, Tinta p/ cabelo -area adm: Compra de suprimentos, Manutenção de equipamentos, Investimento em Marketing</p>
                </div>
            </div>
        </div>

    );
}

export default Sobre;