import React, {
  FC,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import styled from 'styled-components';
import { useSearchCoursesByBlockLazyQuery } from 'gen/graphql-client-api';
import { cardRows, timeColumnElements } from 'utils/data';
import Circular from '@/atoms/Circular/Circular';
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

// こっから
type MyState = {
  I_A: string;
};

type ContextValue = {
  state: MyState;
  setState: Dispatch<SetStateAction<MyState>>;
};

const TimeTable: FC<TimeTableProps> = () => {
  const head: TableHeadProps = {
    headElements: ['ブロック', '科目名', '教師名', '必修'],
  };
  const TimeTableContext = createContext([
    {
      I_A: '',
      // I_B: '',
      // II_A: '',
      // II_B: '',
      // III_A: '',
      // III_B: '',
      // IV_A: '',
      // IV_B: '',
      // V_A: '',
      // V_B: '',
      // VI: '',
    },
    () => {},
  ]);

  const AppContext = createContext<ContextValue>();

  const [state, setState] = useState({
    I_A: '',
    // I_B: '',
    // II_A: '',
    // II_B: '',
    // III_A: '',
    // III_B: '',
    // IV_A: '',
    // IV_B: '',
    // V_A: '',
    // V_B: '',
    // VI: '',
  });

  // ここまで

  const [table, openTable] = useState(false);

  const [
    getFilteredCourses,
    { loading, data },
  ] = useSearchCoursesByBlockLazyQuery();

  const cardActions: CardActions = {
    onActionAreaClick: block => {
      openTable(true);
      getFilteredCourses({ variables: { block } });
    },
    onIconClick: block => {
      setState({
        ...state,
        [block]: '',
      });
    },
  };

  const tableData: TableBodyProps = {
    subjectRows: [],
  };
  data.searchCoursesByBlock.map(course =>
    tableData.subjectRows.push({
      block: course.block,
      teacherName: course.teacher_name,
      courseName: course.course_name,
      // eslint-disable-next-line @typescript-eslint/camelcase
      isCompulsory: course.is_compulsory,
    }),
  );

  return (
    <AppContext.Provider value={[state, setState]}>
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
      <Modal open={table}>
        {loading ? <Circular /> : <Table head={head} body={tableData} />}
      </Modal>
    </AppContext.Provider>
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
