import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Typography } from '@mui/material';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <Box>
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
    </Box>
  );
};

export default Home;
