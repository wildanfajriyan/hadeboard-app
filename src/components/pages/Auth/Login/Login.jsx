import { Paper, Stack, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import TextField from '@/components/ui/Forms/TextField';
import AuthLayout from '@/components/layouts/AuthLayout';
import session from '@/utils/session';
import services from '@/services';
import Dialog from '@/components/ui/Dialog';

const loginSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState({
    title: '',
    message: '',
  });
  const [dialogActions, setDialogActions] = useState([]);

  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (formValues) => {
    setIsLoading(true);

    try {
      const res = await services.auth.login(formValues);
      session.setSession(res.data.data.access_token);
      navigate('/');
    } catch (error) {
      setIsOpenDialog(true);
      setDialogMessage({
        title: 'Oops... Something Went Wrong',
        message: error?.response?.data?.message ?? 'Please try again later',
      });
      setDialogActions([
        {
          label: 'OK',
          onClick() {
            setIsOpenDialog(false);
          },
        },
      ]);
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
          <TextField
            id={'email'}
            label={'Email'}
            control={control}
            name={'email'}
          />
          <TextField
            id={'password'}
            label={'Password'}
            control={control}
            name={'password'}
            secureText={true}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            loading={isLoading}
          >
            Log In to Your Account
          </Button>
          <Button
            type="button"
            variant="text"
            fullWidth
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </Button>
        </Stack>
      </Paper>
      <Dialog open={isOpenDialog} actions={dialogActions} {...dialogMessage} />
    </AuthLayout>
  );
};

export default Login;
