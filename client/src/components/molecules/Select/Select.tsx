import React, { FC } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { styled as muiStyled } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export interface SelectProps {
  inputLabel: string;
  menuItem: string[];
  currentItem: string;
  category: string;
  onChange?: any;
}

const SelectComponent: FC<SelectProps> = (props: SelectProps) => {
  return (
    <Container>
      <InputLabel focused={false}>{props.inputLabel}</InputLabel>
      <Select
        onChange={props.onChange}
        value={props.currentItem}
        name={props.category}
      >
        {props.menuItem.map((value, i) => (
          <MenuItem value={value} key={i}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </Container>
  );
};

const Container = muiStyled(FormControl)({
  marginTop: '20px',
});

export default SelectComponent;
