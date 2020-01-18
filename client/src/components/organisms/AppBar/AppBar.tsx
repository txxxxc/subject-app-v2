import React, { SFC } from 'react';
import styled from 'styled-components';
import { AppBar as MuiAppBar, Box as MuiBox } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@/atoms/Icon/Icon';
import Typography from '@/atoms/Typography/Typography';

const AppBar: SFC<{}> = () => (
  <MuiAppBar>
    <Toolbar>
      <Icon iconName="Dehaze" onClick={() => {}} />
      <Box>
        <Typography text="Subject Simulator" fontSize={34} color={'white'} />
      </Box>
      <Icon iconName="Search" onClick={() => {}} />
    </Toolbar>
  </MuiAppBar>
);

const Box = styled(MuiBox)`
  flex-grow: 1;
`;

export default AppBar;
