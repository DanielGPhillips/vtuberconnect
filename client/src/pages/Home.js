// React Import
import React, {useContext} from 'react';
import { useQuery } from '@apollo/client';
// MUI Component Import
import { Box, Typography, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
// MUI Icon Import

// Resource Import
import Auth from '../utils/auth';
import { AuthContext } from '../utils/auth';
import PostCreate from '../components/PostCreate';
import Feed from '../components/Feed';

export default function Home() {
  
  return (
      <Box>
        {Auth.loggedIn() ? (
          <>
            <PostCreate />
            {/* <Feed /> */}
          </>
        ) : (
          <>
            <Grid container direction="column" sx={{ height: "100 vh" }}>
              <Box textAlign='center'>
                <Typography variant="h2">
                  <b>Welcome to Vycelium!</b>
                </Typography>
              </Box>
              <Grid 
                item
                sx={{
                  backgorundImage: "url(https://ibb.co/8jTG7wQ",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: 'center',
                }}
              />
            </Grid>
          </>
        )}
      </Box>
  );
};

