import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import LandingPage from "./LandingPage.js"



function App() {
  let particleColor = "#118AB2"
  return (
    <div className="App">
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 100
            },
            "size": {
              "value": 3
            },
            "color": {
              "value": particleColor
            }, 
            line_linked: {
              "color": {
                "value": particleColor
              } 
            }
          }
        }} />
    </div>

  );
}

export default App;
