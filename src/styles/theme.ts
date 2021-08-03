import green from '@material-ui/core/colors/green';
import teal from '@material-ui/core/colors/teal';
import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  typography: {
    h6: {
      fontSize: '1.5rem',
    },
  },
  palette: {
    primary: {
      main: green.A700,
      dark: green.A700,
    },
    secondary: {
      main: teal[700],
    },
  },
});

export default theme;
