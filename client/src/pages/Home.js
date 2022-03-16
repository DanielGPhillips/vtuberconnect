// React Import
import React from 'react';
import { useQuery } from '@apollo/client';
// MUI Component Import
import { Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
// MUI Icon Import

// Resource Import
import PostCreate from '../components/PostCreate';
import Feed from '../components/Feed';

export default function Home() {
  return (
      <Box>
          <PostCreate />
          {/* <Feed /> */}
      </Box>
  );
};

