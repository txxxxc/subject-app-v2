import React, { FC } from 'react';
import styled from 'styled-components';
import {
  TableBody as MuiTableBody,
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
} from '@material-ui/core';
import theme from 'utils/theme';
import Typography from '@/atoms/Typography/Typography';

interface SubjectRow {
  block: string;
  courseName: string;
  teacherName: string;
  isCompulsory: boolean;
}

export interface TableBodyProps {
  subjectRows: SubjectRow[];
}

const TableHeadComponent: FC<TableBodyProps> = (props: TableBodyProps) => (
  <TableBody>
    <TableRow>
      {props.subjectRows.map(row => (
        <TableRow key={row.block}>
          <TableCell component="th" scope="row">
            {row.block}
          </TableCell>
          <TableCell align="right">{row.courseName}</TableCell>
          <TableCell align="right">{row.teacherName}</TableCell>
          <TableCell align="right">
            {row.isCompulsory && (
              <Typography
                text="必修"
                fontSize={14}
                color={theme.palette.secondary.main}
              />
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableRow>
  </TableBody>
);

const TableBody = styled(MuiTableBody)``;

const TableRow = styled(MuiTableRow)``;

const TableCell = styled(MuiTableCell)``;

export default TableHeadComponent;
