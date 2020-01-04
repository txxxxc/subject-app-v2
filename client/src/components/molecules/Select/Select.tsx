import React, { FC } from 'react';
// import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export interface SelectProps {
  inputLabel: string;
  menuItem: string[];
  currentItem: string;
  handleChange?: any;
}

const SelectComponent: FC<SelectProps> = (props: SelectProps) => {
  return (
    <FormControl variant="filled">
      <InputLabel>{props.inputLabel}</InputLabel>
      <Select onChange={props.handleChange} value={props.currentItem}>
        {props.menuItem.map((value, i) => (
          <MenuItem value={value} key={i}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
