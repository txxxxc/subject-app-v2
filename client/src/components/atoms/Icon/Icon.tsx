/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SFC } from 'react';
import Delete from '@material-ui/icons/Delete';
import Search from '@material-ui/icons/Search';
import Dehaze from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';

export interface IconProps {
  iconName: 'Dehaze' | 'Search' | 'Delete';
  color?: string;
  onClick: any;
}

const Icon: SFC<IconProps> = (props: IconProps) => {
  switch (props.iconName) {
    case 'Dehaze': {
      return (
        <IconButton>
          <Dehaze style={{ color: props.color }} onClick={props.onClick} />
        </IconButton>
      );
    }
    case 'Search': {
      return (
        <IconButton>
          <Search style={{ color: props.color }} onClick={props.onClick} />
        </IconButton>
      );
    }
    case 'Delete': {
      return (
        <IconButton>
          <Delete style={{ color: props.color }} onClick={props.onClick} />
        </IconButton>
      );
    }
    default: {
      return <img src="" alt="no image" />;
    }
  }
};

export default Icon;
