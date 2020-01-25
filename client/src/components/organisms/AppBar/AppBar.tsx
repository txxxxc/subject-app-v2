import React, { SFC } from 'react';
import styled from 'styled-components';
import { AppBar as MuiAppBar, Box as MuiBox } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@/atoms/Icon/Icon';
import Search, { SearchProps } from '@/organisms/Search/Search';
import Typography from '@/atoms/Typography/Typography';

const searchProps: SearchProps = {
  selectItems: [
    {
      inputLabel: '科目',
      menuItem: ['', '国語', '数学', '英語'],
      currentItem: '',
      category: 'subject',
      onChange: () => {},
    },
    {
      inputLabel: 'ブロック',
      menuItem: ['', 'I_A', 'II_A', 'III_A'],
      currentItem: '',
      category: 'block',
      onChange: () => {},
    },
    {
      inputLabel: '担当教員',
      menuItem: ['', 'Aさん', 'Bさん', 'Cさん'],
      currentItem: '',
      category: 'teacher',
      onChange: () => {},
    },
  ],
  switch: {
    checked: false,
    onChange: () => {},
  },
  iconOnClose: () => {},
};

export interface AppBarProps {
  isOpen: boolean;
  openDrawer(): void;
  closeDrawer(): void;
}

const AppBar: SFC<AppBarProps> = (props: AppBarProps) => {
  return (
    <>
      <MuiAppBar>
        <Toolbar>
          <Icon iconName="Dehaze" onClick={() => {}} color="white" />
          <Box>
            <Typography
              text="Subject Simulator"
              fontSize={34}
              color={'white'}
            />
          </Box>
          <Icon iconName="Search" onClick={props.openDrawer} color="white" />
        </Toolbar>
      </MuiAppBar>
      <Drawer anchor="right" open={props.isOpen} onClose={props.closeDrawer}>
        <Search
          selectItems={searchProps.selectItems}
          switch={searchProps.switch}
          iconOnClose={props.closeDrawer}
        />
      </Drawer>
    </>
  );
};

const Box = styled(MuiBox)`
  flex-grow: 1;
`;

export default AppBar;
