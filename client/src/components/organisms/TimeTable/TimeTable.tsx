import React, { FC } from 'react';
import styled from 'styled-components';
import TimeColumn, { TimeColumnProps } from '@/molecules/TimeColumn/TimeColumn';
import Table from '@/organisms/Table/Table';
import { TableHeadProps } from '@/molecules/TableHead/TableHead';
import { TableBodyProps } from '@/molecules/TableBody/TableBody';
import WeekRow from '@/molecules/WeekRow/WeekRow';
import { CardActions } from '@/molecules/Card/Card';
import CardRow, { CardRowElements } from '@/molecules/CardRow/CardRow';
import Modal from '@/atoms/Modal/Modal';

export interface TimeTableProps {
  timeColumnElements: TimeColumnProps;
  cardRows: CardRowElements[];
  open: boolean;
  cardActions: CardActions;
  tableBody: TableBodyProps;
}

export interface Modal {
  open: boolean;
}

export interface Blocks {
  I_A: string;
  I_B: string;
  II_A: string;
  II_B: string;
  III_A: string;
  III_B: string;
  IV_A: string;
  IV_B: string;
  V_A: string;
  V_B: string;
  VI: string;
  LHR: string;
}

const TimeTable: FC<TimeTableProps> = (props: TimeTableProps) => {
  // const [timeTableState, setTimeTableState] = useState<Modal>({
  //   open: false,
  // });

  // const [blocks, setBlocks] = useState<Blocks>({
  //   I_A: '',
  //   I_B: '',
  //   II_A: '',
  //   II_B: '',
  //   III_A: '',
  //   III_B: '',
  //   IV_A: '',
  //   IV_B: '',
  //   V_A: '',
  //   V_B: '',
  //   VI: '',
  //   LHR: '',
  // });

  // const onActionAreaClick = (block: string) => {
  //   setTimeTableState({ ...timeTableState, open: !timeTableState.open });
  // };

  // const onIconClick = () => {};

  // const cardActions: CardActions = {
  //   onActionAreaClick,
  //   onIconClick,
  // };

  const head: TableHeadProps = {
    headElements: ['ブロック', '科目名', '教師名', '必修'],
  };

  return (
    <>
      <TimeTableContainer>
        <Header>
          <WeekRow />
        </Header>
        <Contents>
          <TimeColumn elements={props.timeColumnElements.elements} />
          <CardContainer>
            {props.cardRows.map((cardRowElements, i) => (
              <React.Fragment key={i}>
                {i === 4 && <Blank />}
                <CardRow
                  cardRowElements={cardRowElements}
                  cardActions={props.cardActions}
                  key={i}
                />
              </React.Fragment>
            ))}
          </CardContainer>
        </Contents>
      </TimeTableContainer>
      <Modal open={props.open}>
        <Table head={head} body={props.tableBody} />
      </Modal>
    </>
  );
};

const TimeTableContainer = styled.div`
  width: 1100px;
  border: solid 0.5px #e3e3e3;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 55px;
`;

const Contents = styled.div`
  display: flex;
  width: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Blank = styled.div`
  height: 40px;
`;

export default TimeTable;
