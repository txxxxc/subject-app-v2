import React, { SFC, useState } from 'react';
import styled from 'styled-components';
import { AppBar as MuiAppBar, Box as MuiBox } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@/atoms/Icon/Icon';
import Search, { SearchProps } from '@/organisms/Search/Search';

const searchProps: SearchProps = {
  selectItems: [
    {
      inputLabel: '科目',
      menuItem: ['なし', '国語', '数学', '英語'],
      currentItem: '',
      category: 'course_name',
    },
    {
      inputLabel: 'ブロック',
      menuItem: ['なし', 'I_A', 'II_A', 'III_A'],
      currentItem: '',
      category: 'block',
    },
  ],
  iconOnClose: () => {},
};

export interface AppBarProps {
  isOpen: boolean;
  openDrawer(): void;
  closeDrawer(): void;
}

const AppBar: SFC<{}> = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <MuiAppBar>
        <Toolbar>
          <Icon iconName="Dehaze" onClick={() => {}} color="white" />
          <Box>
          </Box>
          <Icon iconName="Search" onClick={toggleOpen} color="white" />
        </Toolbar>
      </MuiAppBar>
      <Drawer anchor="right" open={open} onClose={toggleOpen}>
        <Search
          selectItems={searchProps.selectItems}
          iconOnClose={toggleOpen}
        />
      </Drawer>
    </>
  );
};

const Box = styled(MuiBox)`
  flex-grow: 1;
`;
export default AppBar;
