/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SFC } from 'react';
import styled from 'styled-components';
import Delete from '@material-ui/icons/Delete';
import Search from '@material-ui/icons/Search';
import Dehaze from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';

export interface IconProps {
  iconName: 'Dehaze' | 'Search' | 'Delete';
}

const Icon: SFC<IconProps> = (props: IconProps) => {
  switch (props.iconName) {
    case 'Dehaze': {
      return (
        <IconButton>
          <Dehaze style={{ color: 'white' }} />
        </IconButton>
      );
    }
    case 'Search': {
      return (
        <IconButton>
          <Search style={{ color: 'white' }} />
        </IconButton>
      );
    }
    case 'Delete': {
      return (
        <IconButton>
          <Delete />
        </IconButton>
      );
    }
    default: {
      return <img src="" alt="no image" />;
    }
  }
};

export default Icon;
