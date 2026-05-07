import logo from './logo.svg';
import './App.css';
import Saludos from './saludo .js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola que tal estas?
        </p>
        <Saludos nombre = 'Tony'/>
      </header>
    </div>
  );
}

export default App;
