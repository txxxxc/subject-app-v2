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
  const { text, ...boxProps } = props;

  return (
    // コンポーネントの最初の文字は必ず大文字
    <Text component="div">
      <Box {...boxProps}>{text}</Box>
    </Text>
  );
};

const Text = styled(MuiTypography)``;

export default Typography;
