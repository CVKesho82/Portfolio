import './App.css';
import Header from './Components/Header';
import Resume from './Components/Resume';
import "bootstrap/dist/css/bootstrap.css";
import Projects from './Components/Projects';
import TechnicalWriting from './Components/TechnicalWriting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Header />
          <br></br>
          <Projects />
          <br></br>
          <Resume/>
          <br></br>
          <TechnicalWriting />
        </p>
        
      </header>
    </div>
  );
}

export default App;
