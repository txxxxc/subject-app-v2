import React, { FC } from 'react';
// import styled from 'styled-components';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
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
    {props.subjectRows.map((row, i) => (
      <TableRow key={i}>
        <TableCell component="th" scope="row">
          {row.block}
        </TableCell>
        <TableCell>{row.courseName}</TableCell>
        <TableCell>{row.teacherName}</TableCell>
        <TableCell>
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
  </TableBody>
);

export default TableHeadComponent;
