import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSearchCoursesByBlockLazyQuery } from 'gen/graphql-client-api';
import { cardRows, timeColumnElements } from 'utils/data';
import { PageContext } from 'utils/contexts';
import Circular from '@/atoms/Circular/Circular';
import TimeColumn from '@/molecules/TimeColumn/TimeColumn';
import Table from '@/organisms/Table/Table';
import { TableHeadProps } from '@/molecules/TableHead/TableHead';
import { SubjectRow } from '@/molecules/TableBody/TableBody';
import WeekRow from '@/molecules/WeekRow/WeekRow';
import { CardActions } from '@/molecules/Card/Card';
import CardRow from '@/molecules/CardRow/CardRow';
import Modal from '@/atoms/Modal/Modal';

export interface TableState {
  open: boolean;
}

export interface BlockState {
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
}

const TimeTable: FC<{}> = () => {
  const [state, setState] = useState<BlockState>({
    I_A: '',
    I_B: '',
    II_A: '',
    II_B: '',
    III_A: '',
    III_B: '',
    IV_A: '',
    IV_B: '',
    V_A: '',
    V_B: '',
    VI: '',
  });

  const [
    getFilteredCourses,
    { loading, data },
  ] = useSearchCoursesByBlockLazyQuery({ variables: { block: 'I_A' } });

  // Table関連
  const head: TableHeadProps = {
    headElements: ['ブロック', '科目名', '教師名', '必修'],
  };

  const tableData: SubjectRow[] = [];

  const [table, toggleTable] = useState<TableState>({ open: false });

  const handleClose = () => {
    toggleTable({ open: false });
  };

  if (data) {
    data.searchCoursesByBlock.map(course =>
      tableData.push({
        block: course.block,
        teacherName: course.teacher_name,
        courseName: course.course_name,
        isCompulsory: course.is_compulsory,
      }),
    );
  }

  const cardActions: CardActions = {
    onActionAreaClick: block => {
      toggleTable({ open: true });
      getFilteredCourses({ variables: { block } });
    },
    onIconClick: blockName => {
      localStorage.removeItem(blockName);
      console.log(localStorage[blockName]);
      setState({
        ...state,
        [blockName]: '',
      });
    },
  };

  useEffect(() => {
    let subjectName = '';
    Object.keys(state).map(block => {
      subjectName = localStorage[block];
      console.log(block, state[block]);
      if (subjectName) {
        setState(prevState => {
          console.log(prevState);
          console.log(subjectName, block);

          return { ...prevState, [block]: subjectName };
        });
      }
    });
  }, []);

  return (
    <PageContext.Provider value={{ class: state, setClass: setState }}>
      <TimeTableContainer>
        <Header>
          <WeekRow />
        </Header>
        <Contents>
          <TimeColumn elements={timeColumnElements.elements} />
          <CardContainer>
            {cardRows.map((cardRowElements, i) => (
              <React.Fragment key={i}>
                {i === 4 && <Blank />}
                <CardRow
                  cardRowElements={cardRowElements}
                  cardActions={cardActions}
                  key={i}
                />
              </React.Fragment>
            ))}
          </CardContainer>
        </Contents>
      </TimeTableContainer>
      <Modal open={table.open} handleClose={handleClose}>
        {loading ? (
          <Circular />
        ) : (
          <Table head={head} body={tableData} handleClose={handleClose} />
        )}
      </Modal>
    </PageContext.Provider>
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
