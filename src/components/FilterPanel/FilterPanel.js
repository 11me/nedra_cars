import React from 'react';
import {useStyles} from './styles';
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import {SliderUI} from '../../components';


const FilterPanel = (props) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = React.useState({
    brand: false,
    fuel: false,
    bodyType: false
  });
  const handleCheck = (type) => {
    return (e) => {
      setIsChecked({...isChecked, [type]: !isChecked[type]});
      props.onChange(type, e.target.value)
    }
  }
  const lables = Reflect.ownKeys(props.filtersFor);
  const labelFormat = text => `${(text / 1000)}K`;

  return (
    <>
      {
        lables.map(label => (
          <FormControl key={label} className={classes.formControl}>
            <FormLabel>{label}</FormLabel>
            <FormGroup>
              {
                props.filtersFor[label].map(value => (
                  <FormControlLabel key={value}
                    value={value}
                    label={value}
                    onChange={handleCheck(label)}
                    control={<Checkbox />}
                  >
                  </FormControlLabel>

                ))
              }
            </FormGroup>
          </FormControl>
        ))
      }
      <SliderUI
        sliderLabel={"Year"}
        value={props.sliderYearRange}
        min={1980}
        max={2030}
        step={5}
        onChange={(e, range) => props.onYearChange(range)}
      />

      <SliderUI
        sliderLabel={"Price"}
        value={props.sliderPriceChange}
        min={0}
        max={200000}
        step={1000}
        onChange={(e, range) => props.onPriceChange(range)}
        valueLabelFormat={labelFormat}
      />

      <Button
        variant='outlined'
        color='primary'
        onClick={e => props.onApplyFilter(e)}
      >Apply</Button>
    </>
  );
}

export default FilterPanel;
