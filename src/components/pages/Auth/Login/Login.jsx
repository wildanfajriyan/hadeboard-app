import { Paper, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';

import DatePicker from '@/components/ui/Forms/DatePicker';
import Select from '@/components/ui/Forms/Select';
import TextField from '@/components/ui/Forms/TextField';

const Login = () => {
  const { control, watch } = useForm({
    defaultValues: {
      filterDate: dayjs(),
    },
  });
  const username = watch('username');
  const category = watch('category');
  const filterDate = watch('filterDate');

  console.info(`username: ${username}`);
  console.info(`category: ${category}`);
  console.info(`filterDate: ${filterDate}`);

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
        <DatePicker
          control={control}
          name={'filterDate'}
          label={'Choose Date'}
        />
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
