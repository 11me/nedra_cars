import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import {useStyles} from './styles';

const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant="h5"
          className={classes.title}>
          Nedra Cars
          </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
