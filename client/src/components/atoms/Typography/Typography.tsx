import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography as MuiTypography, Box } from '@material-ui/core';

export interface TypographyProps {
  text: string;
  fontWeight?: string | number;
  textAlign?: string;
  fontSize?: string | number;
  color?: string;
}
export const WhiteTypography: FC<TypographyProps> = (
  props: TypographyProps,
) => {
  const { text, fontWeight, textAlign, fontSize } = props;

  return (
    // コンポーネントの最初の文字は必ず大文字
    <WhiteText component="div">
      <Box fontWeight={fontWeight} textAlign={textAlign} fontSize={fontSize}>
        {text}
      </Box>
    </WhiteText>
  );
};

export const BlackTypography: FC<TypographyProps> = (
  props: TypographyProps,
) => {
  const { text, fontWeight, textAlign, fontSize, color } = props;

  return (
    // コンポーネントの最初の文字は必ず大文字
    <BlackText component="div">
      <Box
        fontWeight={fontWeight}
        textAlign={textAlign}
        fontSize={fontSize}
        color={color}
      >
        {text}
      </Box>
    </BlackText>
  );
};

const WhiteText = styled(MuiTypography)`
  background-color: #85eb05;
  color: #fafafa;
`;

const BlackText = styled(MuiTypography)``;
