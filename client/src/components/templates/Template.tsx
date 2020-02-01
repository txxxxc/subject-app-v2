import React, { FC, useState } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { cardRows, timeColumnElements } from 'utils/data';
import SubjectList from '@/molecules/SubjectList/SubjectList';
import AppBar from '@/organisms/AppBar/AppBar';
import TimeTable from '@/organisms/TimeTable/TimeTable';

const Template: FC<{}> = () => {
  const [form, toggleForm] = useState(false);
  const openDrawer = () => {
    toggleForm(true);
  };
  const closeDrawer = () => {
    toggleForm(false);
  };

  return (
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
  );
};

const Container = styled.div``;

const MainContent = styled.div`
  display: flex;
  margin-top: 30px;
`;

export default Template;
