import React, { FC, useState, createContext } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { cardRows, timeColumnElements } from 'utils/data';
import {
  useFindAllCoursesQuery,
  useSearchCoursesByBlockQuery,
} from 'gen/graphql-client-api';
import SubjectList from '@/molecules/SubjectList/SubjectList';
import AppBar from '@/organisms/AppBar/AppBar';
import TimeTable from '@/organisms/TimeTable/TimeTable';

const Template: FC<{}> = () => {
  const PageContext = createContext([
    {
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
      currentBlock: '',
    },
    () => {},
  ]);

  const [state, setState] = useState({});
  const courses = useFindAllCoursesQuery();
  const filteredCourses = useSearchCoursesByBlockQuery();
  console.log({ filteredCourses });
  console.log({ courses });
  const [form, toggleForm] = useState(false);
  const openDrawer = () => {
    toggleForm(true);
  };
  const closeDrawer = () => {
    toggleForm(false);
  };

  return (
    <PageContext.Provider value={[state, setState]}>
      <CssBaseline>
        <Container>
          <AppBar
            isOpen={form}
            openDrawer={openDrawer}
            closeDrawer={closeDrawer}
          />
          <MainContent>
            <TimeTable
              cardRows={cardRows}
              timeColumnElements={timeColumnElements}
              cardActions={}
              tableBody={}
              open={}
            />
            <SubjectList />
          </MainContent>
        </Container>
      </CssBaseline>
    </PageContext.Provider>
  );
};

const Container = styled.div``;

const MainContent = styled.div`
  display: flex;
  margin-top: 30px;
`;

export default Template;
