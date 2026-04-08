import { Paper, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

import Select from '../../../ui/forms/Select';
import TextField from '../../../ui/forms/TextField';

const Login = () => {
  const { control, watch } = useForm();
  const username = watch('username');
  const category = watch('category');

  console.info(`username: ${username}`);
  console.info(`category: ${category}`);

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
        <TextField control={control} name={'username'} label={'Username'} />

        <Select
          name={'category'}
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
