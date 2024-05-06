
import './App.css';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
