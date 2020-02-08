import React, { FC } from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import theme from 'utils/theme';
import Typography from '@/atoms/Typography/Typography';

export interface SubjectRow {
  block: string;
  courseName: string;
  teacherName: string;
  isCompulsory: boolean;
}

export interface TableBodyProps {
  subjectRows: SubjectRow[];
  onTableElementClick(blockName: string, courseName: string): void;
}

const TableHeadComponent: FC<TableBodyProps> = (props: TableBodyProps) => {
  return (
    <TableBody>
      {props.subjectRows.map((row, i) => {
        const hoge = () => {
          props.onTableElementClick(row.block, row.courseName);
        };

        return (
          <TableRow key={i} hover onClick={hoge}>
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
        );
      })}
    </TableBody>
  );
};

export default TableHeadComponent;
