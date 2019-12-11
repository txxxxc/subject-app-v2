/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SFC } from 'react';
import styled from 'styled-components';
import Delete from '@material-ui/icons/Delete';
import Search from '@material-ui/icons/Search';
import Dehaze from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';

export interface IconProps {
  IconName: 'Dehaze' | 'Search' | 'Delete';
}

const Icon: SFC<IconProps> = (props: IconProps) => {
  const { IconName } = props;
  switch (IconName) {
    case 'Dehaze': {
      return (
        <IconButton>
          <Dehaze />
        </IconButton>
      );
    }
    case 'Search': {
      return (
        <IconButton>
          <Search />
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
