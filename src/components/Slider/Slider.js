import {Slider, Typography} from '@material-ui/core';
import {useStyles} from './styles';

const SliderUI = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography id="range-slider">{props.sliderLabel}</Typography>
      <Slider
        value={props.value}
        min={props.min}
        max={props.max}
        onChange={props.onChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        step={props.step}
        valueLabelFormat={props.valueLabelFormat}
      >
      </Slider>
    </div>
  );
}

export default SliderUI;
