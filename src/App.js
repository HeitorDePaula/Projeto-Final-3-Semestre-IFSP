import './App.css';
import './Footer.css';
import Home from './Components/Home.js'
import Footer from './Components/Footer.js'
import Contato from './Components/Contato.js'


function App() {
  return (
   <div className="App">
      <Home />
      <Contato />
      <Footer />
   </div>
  );
}

export default App;
