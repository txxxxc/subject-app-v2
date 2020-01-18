import React, { FC, useState } from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';
import { styled as muiStyled } from '@material-ui/core/styles';
import Typography from '@/atoms/Typography/Typography';
import Select, { SelectProps } from '@/molecules/Select/Select';
import Switch, { SwitchProps } from '@/atoms/Switch/Switch';
import Icon from '@/atoms/Icon/Icon';

export interface SearchProps {
  selectItems: SelectProps[];
  switch: SwitchProps;
  iconOnClose: any;
}

const SearchComponent: FC<SearchProps> = (props: SearchProps) => {
  const [currentData, setCurrentData] = useState({
    subject: '',
    block: '',
    teacher: '',
    isCompulsory: false,
  });

  const changeCurrentData = (e: any) =>
    setCurrentData({ ...currentData, [e.target.name]: e.target.value });

  const onSwitch = () =>
    setCurrentData({ ...currentData, isCompulsory: !currentData.isCompulsory });

  return (
    <Container>
      <Header>
        <HeaderTypography text="Filter" fontSize={24} color="white" />
        <Icon iconName="Search" onClick={props.iconOnClose} color="white" />
      </Header>
      <SearchItems>
        {props.selectItems.map((item, i) => (
          <Select
            inputLabel={item.inputLabel}
            menuItem={item.menuItem}
            currentItem={currentData[item.category]}
            onChange={changeCurrentData}
            category={item.category}
            key={i}
          />
        ))}
        <Switch checked={currentData.isCompulsory} onChange={onSwitch} />
      </SearchItems>
    </Container>
  );
};

const Container = styled.div`
  width: 360px;
`;

const Header = styled.div`
  display: flex;
  background-color: ${theme.palette.primary.main};
`;

const HeaderTypography = muiStyled(Typography)({
  padding: '5px 0 0 15px',
  flexGrow: 1,
});

const SearchItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SearchComponent;
