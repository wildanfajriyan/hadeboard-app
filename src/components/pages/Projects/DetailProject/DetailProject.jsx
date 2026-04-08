import { Stack } from '@mui/material';
import Dropdown from '../../../ui/Dropdown';
import { Settings } from '@mui/icons-material';

const DetailProject = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
      }}
      justifyContent={'center'}
      alignItems={'center'}
    >
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
