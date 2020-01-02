import React, { FC } from 'react';
// import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableHead, { TableHeadProps } from '@/molecules/TableHead/TableHead';
import TableBody, { TableBodyProps } from '@/molecules/TableBody/TableBody';

export interface TableProps {
  head: TableHeadProps;
  body: TableBodyProps;
}

const TableComponent: FC<TableProps> = (props: TableProps) => (
  <Table>
    <TableHead headElements={props.head.headElements} />
    <TableBody subjectRows={props.body.subjectRows} />
  </Table>
);

export default TableComponent;
