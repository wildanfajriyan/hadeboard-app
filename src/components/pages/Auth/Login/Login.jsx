import { Paper, Stack, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import TextField from '@/components/ui/Forms/TextField';
import AuthLayout from '@/components/layouts/AuthLayout';
import session from '@/utils/session';
import { useState } from 'react';
import services from '@/services';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm();

  const onSubmit = async (formValues) => {
    setIsLoading(true);
    
    try {
      const res = await services.auth.login(formValues);
      session.setSession(res.data.data.access_token);
      navigate('/');
    } catch (error) {
      console.error('Failed Login ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Paper
        sx={{
          width: 500,
          padding: 2,
        }}
      >
        <Typography
          variant="h5"
          component={'h1'}
          align="center"
          marginBottom={2}
        >
          Log In
        </Typography>
        <Stack
          flexDirection={'column'}
          gap={1}
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField label={'Email'} control={control} name={'email'} />
          <TextField label={'Password'} control={control} name={'password'} />
          <Button type="submit" variant="contained" fullWidth>
            Log In to Your Account
          </Button>
          <Button
            type="button"
            variant="text"
            fullWidth
            onClick={() => Navigate('/signup')}
          >
            Sign Up
          </Button>
        </Stack>
      </Paper>
    </AuthLayout>
  );
};

export default Login;
