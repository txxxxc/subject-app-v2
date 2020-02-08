import React, { FC, useContext } from 'react';
import { PageContext } from 'utils/contexts';
import Table from '@material-ui/core/Table';
import TableHead, { TableHeadProps } from '@/molecules/TableHead/TableHead';
import TableBody, { SubjectRow } from '@/molecules/TableBody/TableBody';

export interface TableProps {
  head: TableHeadProps;
  body: SubjectRow[];
  handleClose(): void;
}

const TableComponent: FC<TableProps> = (props: TableProps) => {
  const context = useContext(PageContext);
  const onTableElementClick = (blockName, courseName) => {
    localStorage[blockName] = courseName;
    console.log(localStorage);
    props.handleClose();
    context.setClass({
      ...context.class,
      [blockName]: courseName,
    });
  };

  return (
    <Table>
      <TableHead headElements={props.head.headElements} />
      <TableBody
        subjectRows={props.body}
        onTableElementClick={onTableElementClick}
      />
    </Table>
  );
};

export default TableComponent;
