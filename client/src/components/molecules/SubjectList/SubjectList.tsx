import React, { FC } from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';
import Typography from '@/atoms/Typography/Typography';
import SubjectListElement, {
  SubjectListElementProps,
} from '@/molecules/SubjectListElement/SubjectListElement';
import Circular from '@/atoms/Circular/Circular';

export interface SubjectListProps {
  subjectListElements: SubjectListElementProps[];
}


const SubjectList: FC<SubjectListProps> = (props: SubjectListProps) => {
  console.log(props.subjectListElements.length)
  return (
  <Container>
    {props.subjectListElements.length === 0 ? (
      <Circular />
    ) : (
      <>
        <Title
          text="科目一覧"
          fontSize={20}
          color={theme.palette.text.primary}
        />
        <SubjectListContainer>
        {
          props.subjectListElements.map((element, i) => (
              <SubjectListElement
                subjectName={element.subjectName}
                block={element.block}
                isCompulsory={element.isCompulsory}
                key={i}
              />      
          ))
        }
        </SubjectListContainer>
      </>
      )
    }
  </Container>
)};

const Container = styled.div`
  height: 100vh;
  padding: 30px 30px 0 30px;
  border-left: solid 1px ${theme.palette.divider};
  min-width: 420px;
`;

const Title = styled(Typography)``;

const SubjectListContainer = styled.div`
  height: 90%;
  overflow: scroll;
`;

export default SubjectList;
