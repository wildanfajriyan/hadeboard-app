import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { createBrowserRouter, Link, RouterProvider } from 'react-router';
import Table from './components/ui/Table';
import Pagination from './components/ui/Pagination';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Box>
        <Table
          columns={[
            {
              id: 'task',
              label: 'Task',
            },
            {
              id: 'status',
              label: 'Status',
            },
          ]}
          data={[
            {
              id: 1,
              task: 'Task 1',
              status: 'New',
            },
            {
              id: 2,
              task: 'Task 2',
              status: 'On Progress',
            },
            {
              id: 3,
              task: 'Task 3',
              status: 'Review',
            },
          ]}
        />
        <Pagination
          count={10}
          onChange={(e, page) => {
            console.info(page);
          }}
        />
      </Box>
    ),
  },
  {
    path: '/login',
    element: (
      <Box>
        <Typography variant="h2">Login</Typography>
        <Link to="/">Home</Link>
      </Box>
    ),
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
