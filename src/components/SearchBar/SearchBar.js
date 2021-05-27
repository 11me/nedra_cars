import {TextField} from '@material-ui/core';
import {useStyles} from './styles';

const SearchBar = (props) => {
  const styles = useStyles();

  return (
    <TextField
      onChange={e => props.onInputTextChange(e.target.value)}
      className={styles.root}
      variant='outlined'
      label='Search...'>
    </TextField>
  );
}

export default SearchBar;
