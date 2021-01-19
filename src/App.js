import './App.css';
import LandingPage from "./LandingPage.js"
import Graphic from "./custom_comps/Graphic.js"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {

  },

}));

function App() {
  const classes = useStyles;
  

  return (
    <div className="App">
      <Graphic></Graphic>
    </div>

  );
}

export default App;


