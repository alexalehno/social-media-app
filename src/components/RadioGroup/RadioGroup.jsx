import classes from './RadioGroup.module.scss';
import { useState } from 'react';

export const RadioGroup = ({ title, name, arr, defaultValue, fetchValue }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    fetchValue(e.target.value);
  };

  return (
    <div className={classes.radio_wrapper}>
      <h3>{title}</h3>
      <div className={classes.switch}>
        {
          arr.map(obj => (
            <RadioItem 
              selectedOption={selectedOption}
              handleChange={handleChange}
              value={obj.value} 
              title={obj.title}
              name={name}
              key={obj.value}
            />
          ))
        }
      </div>
    </div>
  )
}

const RadioItem = ({ value, title, name, handleChange, selectedOption }) => {
  return (
    <label className={classes.radioLabel}>
      <input 
        className={classes.radioInput}
        type="radio" 
        name={name}
        value={value} 
        checked={selectedOption === value}
        onChange={handleChange}
      />
      <span className={classes.radioBtn}></span>
      {title}
    </label>
  )
}