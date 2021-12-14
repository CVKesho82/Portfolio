import logo from './logo.svg';
import './App.css';
import TechSkills from './Components/TechSkills';
import {Card, Row, Col, Container, Image} from 'react-bootstrap';
import Header from './Components/Header';
import Resume from './Components/Resume';
import "bootstrap/dist/css/bootstrap.css";
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Header />
          <br></br>
          <TechSkills />
          <br></br>
          <Projects />
          <br></br>
          <Resume/>
        </p>
        
      </header>
    </div>
  );
}

export default App;
