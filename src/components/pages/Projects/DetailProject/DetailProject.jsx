import { Settings } from '@mui/icons-material';
import { Stack } from '@mui/material';

import Avatar from '../../../ui/Avatar';
import Dropdown from '../../../ui/Dropdown';

const DetailProject = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
      }}
      justifyContent={'center'}
      alignItems={'center'}
      direction={'row'}
      spacing={2}
    >
      <Avatar
        text={'Bob Bobby'}
        onClick={() => {
          console.info('handle click avatar');
        }}
      />
      <Dropdown
        icon={<Settings />}
        options={[
          {
            label: 'Close project',
            onClick() {
              console.info('handle close project');
            },
          },
          {
            label: 'Change deadline',
            onClick() {
              console.info('handle update deadline');
            },
          },
        ]}
      />
    </Stack>
  );
};

export default DetailProject;
