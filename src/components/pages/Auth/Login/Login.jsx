import { Paper, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

import Select from '../../../ui/forms/Select';

const Login = () => {
  const { control } = useForm();

  return (
    <Stack
      spacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
    >
      <Paper
        sx={{
          width: 600,
          padding: 2,
        }}
      >
        <Select
          name={'Category'}
          control={control}
          label={'Choose Category'}
          options={[
            {
              value: 'First Category',
              label: 'First Category',
            },
            {
              value: 'Second Category',
              label: 'Second Category',
            },
          ]}
        />
      </Paper>
    </Stack>
  );
};

export default Login;
