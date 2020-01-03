import React, { FC } from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import Typography from '@/atoms/Typography/Typography';

export interface TableHeadProps {
  headElements: string[];
}

const TableHeadComponent: FC<TableHeadProps> = (props: TableHeadProps) => (
  <TableHead>
    <TableRow>
      {props.headElements.map((element, i) => (
        <TableCell key={i}>
          <Typography
            text={element}
            fontSize={16}
            fontWeight="fontWeightBold"
          />
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default TableHeadComponent;
