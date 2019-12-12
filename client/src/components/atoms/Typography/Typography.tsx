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

const Typography: FC<TypographyProps> = (props: TypographyProps) => {
  const { text, fontWeight, textAlign, fontSize, color } = props;

  return (
    // コンポーネントの最初の文字は必ず大文字
    <Text component="div">
      <Box
        fontWeight={fontWeight}
        textAlign={textAlign}
        fontSize={fontSize}
        color={color}
      >
        {text}
      </Box>
    </Text>
  );
};

const Text = styled(MuiTypography)``;

export default Typography;
