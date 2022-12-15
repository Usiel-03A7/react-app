import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola perra</p>
        <Welcome message="Acceso correcto a los props" name ="Usiel"/> 
      </header>
    </div>
  );
}

export default App;
