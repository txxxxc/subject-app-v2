import React, { FC } from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';
import Typography from '@/atoms/Typography/Typography';

export interface SubjectListElementProps {
  subjectName: string;
  block: string;
  isCompulsory: boolean;
}

const SubjectListElement: FC<SubjectListElementProps> = (
  props: SubjectListElementProps,
) => (
  <Container>
    <MainContent>
      <SubjectName>
        <Typography
          text={props.subjectName}
          fontSize={16}
          color={theme.palette.text.primary}
        />
      </SubjectName>
      <Block text={props.block} fontSize={14} color={theme.palette.grey[500]} />
    </MainContent>
    {props.isCompulsory && (
      <Compulsory
        text="必修"
        fontSize={14}
        color={theme.palette.secondary.main}
      />
    )}
  </Container>
);

const Container = styled.div`
  width: 360px;
  border-bottom: solid 1px ${theme.palette.divider};
  padding: 30px 0 0 10px;
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
`;

const SubjectName = styled.div`
  flex-grow: 1;
`;

const Block = styled(Typography)``;

const Compulsory = styled(Typography)`
  padding: 0 0 10px 0;
`;

export default SubjectListElement;
