import React, { FC } from 'react';
import { styled } from '@material-ui/core/styles';
import styledComponents from 'styled-components';
import { Card as MuiCard } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@/atoms/Typography/Typography';
import Icon from '@/atoms/Icon/Icon';
import theme from '../../../utils/theme';

export interface CardProps {
  elements: CardElements;
  actions: CardActions;
}

export interface CardElements {
  blockName: string;
}

export interface CardActions {
  onIconClick(block: string): void;
  onActionAreaClick(block: string): void;
}

const Card: FC<CardProps> = (props: CardProps) => {
  return (
    <Container>
      <ActionArea onClick={() => props.actions.onActionAreaClick('hoge')}>
        <Header>
          <BlockName
            text={props.elements.blockName}
            fontSize={14}
            color={theme.palette.grey[500]}
          />
        </Header>
        <Content>
          <SubjectTypography
            text="hoge"
            fontSize={34}
            fontWeight="fontWeightLight"
            color={theme.palette.text.primary}
          />
        </Content>
      </ActionArea>
      <CardActions>
        <DeleteIcon>
          <Icon iconName="Delete" onClick={() => props.actions.onIconClick} />
        </DeleteIcon>
      </CardActions>
    </Container>
  );
};

const Container = styled(MuiCard)({
  width: '200px',
});

const Header = styled(CardContent)({
  display: 'flex',
  padding: '0 0 0 8px',
});

const BlockName = styledComponents(Typography)`
  height: 100%;
  padding-top: 12px;
`;

const DeleteIcon = styledComponents.div`
  margin-left: auto;
  z-index: 100;
`;

const SubjectTypography = styledComponents(Typography)`
  padding-left: 5px;
`;

const ActionArea = styled(CardActionArea)({
  padding: '5px 0 0 0',
});

const Content = styled(CardContent)({
  padding: 0,
});

export default Card;
