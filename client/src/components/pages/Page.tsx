import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSearchCoursesLazyQuery } from 'gen/graphql-client-api';
import AppBar from '@/organisms/AppBar/AppBar';
import TimeTable from '@/organisms/TimeTable/TimeTable';
import { SearchContext } from 'utils/contexts';
import SubjectList from '@/molecules/SubjectList/SubjectList';


export interface BlockState {
  course_name?: string;
  block?: string;
  teacher_name?: string;
  is_compulsory?: boolean;
}
const Page: FC<{}> = () => {
  const [state, setState] = useState<BlockState>({});
  const [getFilteredCourses, { data }] = useSearchCoursesLazyQuery({
    variables: state
  });

  const [list, setList] = useState([]);
  
  useEffect(() => {
    (async() => {
      await getFilteredCourses({ variables: state });
    })();
  }, [state]);

  useEffect(() => {
    if (data) {
      console.log({ data })
      data.searchCourses.map(async course => {
        const element = await {
          subjectName: course.course_name,
          block: course.block,
          isCompulsory: course.is_compulsory,
        }
        await setList(prev => [
          ...prev,
          element
        ])
      });
    } else {
      console.log('not found');
    }
  }, [data])
  console.log({list})
  return (
    <CssBaseline>
      <SearchContext.Provider value={{ state: state, setState: setState }}>
        <Container>
          <AppBar />
          <MainContent>
            <Table>
              <TimeTable />
            </Table>
            <BrowserResult>
              <SubjectList subjectListElements={list} />
            </BrowserResult>
          </MainContent>
        </Container>
      </SearchContext.Provider>
    </CssBaseline>
  );
};

const Container = styled.div``;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  margin-left: 30px;
`;

const Table = styled.div`
  max-width: 1000px;
  flex-grow: 1;
`

const BrowserResult = styled.div`
  margin-left: auto;

`

export default Page;
