import './App.css';
import Particles from 'react-particles-js';
import LandingPage from "./LandingPage.js"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {

  },

}));  

function App() {
  const classes = useStyles;
  let particleColor = "#118AB2";

  return (
    <div className="App">

      <LandingPage></LandingPage>

    </div>

  );
}

export default App;


{/* <Particles
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
        }}>
            
          </Particles> */}