import { Stack } from '@mui/material';

const AuthLayout = ({ children }) => {
  return (
    <Stack
      spacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
    >
      {children}
    </Stack>
  );
};

export default AuthLayout;
