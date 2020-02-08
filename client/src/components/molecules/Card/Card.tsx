import React, { FC, useContext } from 'react';
import { styled } from '@material-ui/core/styles';
import styledComponents from 'styled-components';
import { Card as MuiCard } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { PageContext } from 'utils/contexts';
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
  const context = useContext(PageContext);
  const { blockName } = props.elements;

  const removeSubject = block => {
    props.actions.onIconClick(block);
  };

  return (
    <Container>
      <DeleteIcon>
        <Icon iconName="Delete" onClick={() => removeSubject(blockName)} />
      </DeleteIcon>
      <ActionArea onClick={() => props.actions.onActionAreaClick(blockName)}>
        <Header>
          <BlockName
            text={blockName}
            fontSize={14}
            color={theme.palette.grey[500]}
          />
        </Header>
        <Content>
          <SubjectTypography
            text={context.class[blockName]}
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
  position: 'relative',
  width: '200px',
  marginLeft: '8px',
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
  position: absolute;
  left: 80%;
  z-index: 10;
`;

const SubjectTypography = styledComponents(Typography)`
  padding-left: 5px;
`;

const ActionArea = styled(CardActionArea)({
  padding: '5px 8px 25px 8px',
});

const Content = styled(CardContent)({
  height: '51px',
  padding: 0,
});

export default Card;
