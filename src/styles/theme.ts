import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  typography: {
    h6: {
      fontSize: 23,
    },
  },
  palette: {
    primary: {
      main: '#00C471',
      dark: '#00C471',
    },
    secondary: {
      main: '#007aff',
    },
  },
});

export default theme;
