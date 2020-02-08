import React, { FC } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
// import SubjectList from '@/molecules/SubjectList/SubjectList';
// import AppBar from '@/organisms/AppBar/AppBar';
import TimeTable from '@/organisms/TimeTable/TimeTable';

const Page: FC<{}> = () => {
  return (
    <CssBaseline>
      <Container>
        {/* <AppBar
            isOpen={form}
            openDrawer={openDrawer}
            closeDrawer={closeDrawer}
          /> */}
        <MainContent>
          <TimeTable />
          {/* <SubjectList /> */}
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

export default Page;
