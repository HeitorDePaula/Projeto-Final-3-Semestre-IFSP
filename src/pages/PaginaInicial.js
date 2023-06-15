import '../Style/App.css';
import '../Style/Footer.css';
import Home from '../Components/Home.js'
import Footer from '../Components/Footer.js'
import Contato from '../Components/Contato.js'
import Sobre from '../Components/Sobre.js'
import Plan from '../Components/Plan.js'

function App() {
  return (
   <div className="App">
    <Home />
    <Sobre />
    <Plan />
    <Contato />
    <Footer />
   </div>
  );
}

export default App;