import React, { FC } from 'react';
import styled from 'styled-components';
import {
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
} from '@material-ui/core';

export interface TableHeadProps {
  headElements: string[];
}

const TableHeadComponent: FC<TableHeadProps> = (props: TableHeadProps) => (
  <TableHead>
    <TableRow>
      {props.headElements.map((element, i) => (
        <TableCell key={i}>{element}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);

const TableHead = styled(MuiTableHead)``;

const TableRow = styled(MuiTableRow)``;

const TableCell = styled(MuiTableCell)``;

export default TableHeadComponent;
