import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';

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
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Contact">contacto</Link>
              </li>
              <li>
                <Link to="/AboutMe">quien soy</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/Contact" element={<Contact/>}></Route>
          </Routes>
          <Routes>
            <Route path="/aboutme" element={<AboutMe/>}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
