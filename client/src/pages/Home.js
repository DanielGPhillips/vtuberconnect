// React Import
import React from 'react';
import { useQuery } from '@apollo/client';
// MUI Component Import
import { Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
// MUI Icon Import

// Resource Import
import PostCreate from '../components/PostCreate';

export default function Home() {
  return (
      <Box>
        <Box>
          <PostCreate />
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
      </Box>
  );
};

