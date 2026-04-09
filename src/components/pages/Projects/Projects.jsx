import { colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '@/components/layouts/SidebarLayout';

const Projects = () => {
  return (
    <SidebarLayout
      pageTitle="Project List"
      breadcrumbs={[
        {
          label: 'Project List',
        },
      ]}
    >
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>Hello</Typography>
      </Paper>
    </SidebarLayout>
  );
};

export default Projects;
