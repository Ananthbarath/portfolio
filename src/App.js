
import { useContext } from 'react';
import './App.css';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import { themeContext } from './Context';
function App() {
  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{background:darkMode?'black': ' ',
      color : darkMode? 'white': ' '
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
