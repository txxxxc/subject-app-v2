import React, { FC } from 'react';
import Switch from '@material-ui/core/Switch';

export interface SwitchProps {
  checked: boolean;
  setChecked?(): void;
}

const SwitchComponent: FC<SwitchProps> = (props: SwitchProps) => {
  return (
    <div>
      <Switch
        checked={props.checked}
        onChange={props.setChecked}
        color="primary"
      />
    </div>
  );
};

export default SwitchComponent;
