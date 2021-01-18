import { createMuiTheme }  from '@material-ui/core/styles'
const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto Mono","Roboto", "Helvetica", "Arial", sans-serif'
  },
  palette: {
    background: {
      default: "#000000"
    },
    primary: {
      light:"#139FCD",
      main: "#118AB2",
      dark: "#1082A8"
    }
  }
})
export default theme