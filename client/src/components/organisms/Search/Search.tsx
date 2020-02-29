/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';
import { SearchContext } from 'utils/contexts';
// import { styled as muiStyled } from '@material-ui/core/styles';
// import Typography from '@/atoms/Typography/Typography';
import Select, { SelectProps } from '@/molecules/Select/Select';
import Switch from '@/atoms/Switch/Switch';
import Icon from '@/atoms/Icon/Icon';

export interface SearchProps {
  selectItems: SelectProps[];
  iconOnClose: any;
}

const SearchComponent: FC<SearchProps> = (props: SearchProps) => {
  const context = useContext(SearchContext);

  const changeCurrentData = (e: any) =>{
    console.log(e.target.name);
    
    return context.setState({ ...context.state, [e.target.name]: e.target.value });
  }

  const onSwitch = () =>
    context.setState({ ...context.state, is_compulsory: !context.state.is_compulsory });

  return (
    <Container>
      <Header>
        <SearchButtonContainer>
          <SearchIcon iconName="Search" onClick={props.iconOnClose} color="white" />
        </SearchButtonContainer>
      </Header>
      <SearchItems>
        {props.selectItems.map((item, i) => (
          <Select
            inputLabel={item.inputLabel}
            menuItem={item.menuItem}
            currentItem={context.state[item.category] ? context.state[item.category] : ''}
            onChange={changeCurrentData}
            category={item.category}
            key={i}
          />
        ))}
        <Switch checked={context.state.is_compulsory} onChange={onSwitch} />
      </SearchItems>
    </Container>
  );
};

const Container = styled.div`
  width: 360px;
`;

const Header = styled.div`
  height: 64px;
  background-color: ${theme.palette.primary.main};
  padding: 8px 24px 12px 0px;
`;

const SearchButtonContainer = styled.div`
  text-align: right;
`
const SearchIcon = styled(Icon)`
`;
const SearchItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export default SearchComponent;
