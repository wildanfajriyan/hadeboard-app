import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
