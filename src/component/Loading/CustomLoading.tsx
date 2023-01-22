import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const  CustomLoading=()=> {
  return (
    <Box sx={{ display: 'flex', justifyContent:'center' }}>
      <CircularProgress />
    </Box>
  );
}