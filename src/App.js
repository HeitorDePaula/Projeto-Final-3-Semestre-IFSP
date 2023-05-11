import './Style/App.css';
import './Style/Footer.css';
import Home from './Components/Home.js'
import Footer from './Components/Footer.js'
import Contato from './Components/Contato.js'
import Sobre from './Components/Sobre.js'
import Plan from './pages/PlanList'
import Area from './Cliente/Area'


function App() {
  return (
   <div className="App">
      <Area />
   </div>
  );
}

export default App;
