import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export const CustomError=()=> {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Failed to fetch api — <strong>try again later!</strong>
      </Alert>
    </Stack>
  );
}