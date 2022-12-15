import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';

/**
 * 
 * @returns etiquetas asignadas
 * 
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola name</p>
        <Welcome message="Acceso correcto a los props" name={"54"}/>  
      </header>
    </div>
  );
}

export default App;
