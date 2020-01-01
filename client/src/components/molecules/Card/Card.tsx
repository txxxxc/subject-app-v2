import React, { FC } from 'react';
import { styled } from '@material-ui/core/styles';
import styledComponents from 'styled-components';
import { Card as MuiCard } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@/atoms/Typography/Typography';
import Icon from '@/atoms/Icon/Icon';
import theme from '../../../utils/theme';

export interface CardProps {
  blockName: string;
  subjectName: string;
}

const Card: FC<CardProps> = (props: CardProps) => {
  return (
    <Container>
      <Header>
        <BlockName
          text={props.blockName}
          fontSize={14}
          color={theme.palette.grey[500]}
        />
        <DeleteIcon>
          <Icon iconName="Delete" />
        </DeleteIcon>
      </Header>
      <ActionArea>
        <Content>
          <Typography
            text={props.subjectName}
            fontSize={34}
            fontWeight="fontWeightLight"
            color={theme.palette.text.primary}
          />
        </Content>
      </ActionArea>
    </Container>
  );
};

const Container = styled(MuiCard)({
  width: '200px',
  height: '120px',
  padding: 0,
});

const Header = styled(CardContent)({
  display: 'flex',
  height: '35%',
  padding: '0 0 0 8px',
});

const BlockName = styledComponents(Typography)`
  height: 100%;
  padding-top: 12px;
`;

const DeleteIcon = styledComponents.div`
  margin-left: auto;
`;

const ActionArea = styled(CardActionArea)({
  height: '65%',
  padding: 0,
});

const Content = styled(CardContent)({
  padding: 0,
});

export default Card;
