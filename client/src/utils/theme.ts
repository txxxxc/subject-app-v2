import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#85EB05',
    },
    secondary: {
      main: '#FF5722',
    },
  },
  typography: {
    fontFamily: 'Noto Sans CJK JP',
  },
});

console.log(theme.typography);

export default theme;
