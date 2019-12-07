import React, { FC } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

const Layout: FC = () => (
  <CssBaseline>
    <Container>
      <Header />
      <Main>
        <TimeTable />
        <SubjectList />
      </Main>
    </Container>
  </CssBaseline>
);

const Container = styled.div`
  width: 100%;
  background-color: #f6f6f4;
`;

const Header = styled.div`
  width: 100%;
  height: 56px;
  background-color: white;
  border: solid 1px black;
`;

const Main = styled.div`
  display: flex;
  width: 1920px;
  height: 1000px;
  margin-top: 30px;
`;

const TimeTable = styled.div`
  width: 60%;
  height: 100%;
  background-color: white;
  border: solid 1px black;
`;

const SubjectList = styled.div`
  width: 40%;
  height: 100%;
  background-color: white;
  border: solid 1px black;
`;


export default Layout;
