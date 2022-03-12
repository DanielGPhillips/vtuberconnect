import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme ({
  palette: {
    type: 'dark',
    primary: {
      main: '#ff6800',
    },
    secondary: {
      main: '#FFB27E',
    },
    error: {
      main: '#f44336',
    },
  }
});
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* Carousel */}
        <Typography variant='h6'>Carousel</Typography>
      </Box>
      <Box>
        {/* Post Function */}
        <Typography variant='h6'>Make a Post</Typography>
      </Box>
      <Box>
        {/* Post Feed from followed users*/}
        <Typography variant='h6'>Followed Feed</Typography>
      </Box>
    </ThemeProvider>
  );
};

