import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({updateHalalFilter, updateGlutenFreeFilter, updateVegetarianFilter}) {
  return ( 
    <div className = "filter">
    <FormGroup>
      <FormControlLabel control={<Checkbox />} onChange={updateHalalFilter} label="Halal" />
      <FormControlLabel control={<Checkbox />} onChange={updateVegetarianFilter} label="Vegetarian" />
      <FormControlLabel control={<Checkbox />} onChange={updateGlutenFreeFilter} label="Gluten Free" />
    </FormGroup>
    </div>
  ); 
}