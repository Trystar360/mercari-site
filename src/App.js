import './App.css';
import Graphic from "./custom_comps/Graphic.js"
import NavBar from "./custom_comps/NavBar.js"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {

  },

}));

function App() {
  const classes = useStyles;


  return (
    <div className="App">
      <Graphic/>
      <NavBar/>
    </div>

  );
}

export default App;


