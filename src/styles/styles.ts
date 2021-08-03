import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  signUpContainer: {
    marginTop: '120px',
    width: '380px',
  },
  bold: {
    fontWeight: 'bold',
  },
  submit: {
    height: '50px',
    marginTop: '15px',
    marginBottom: '15px',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  policy: {
    fontSize: '0.75rem',
  },
  password: {
    color: grey[500],
    fontSize: '0.7rem',
    fontWeight: 'bold',
  },
});

export default useStyles;
