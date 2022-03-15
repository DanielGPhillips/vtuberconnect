// React Import
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// Mui Component Import
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
// Apollo Import
import { useMutation } from '@apollo/client';
// Resource Import
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Copyright from '../props/Copyright';

function SignUp() {
  const [signUpInput, setFormState] = useState({
    email: '',
    username: '',    
    password: '',
    confirmPassword: '',    
    });

  const [signUp, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...signUpInput,
      [name]: value,
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(signUpInput);
    try {
      await signUp({
        variables: { 
          signUpInput: {...signUpInput },
        },
      });

      Auth.login(data.signUp.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      username: '',    
      password: '',
      confirmPassword: '',
    })
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={12} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              value={signUpInput.email}
              label="Email Address"                  
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            value={signUpInput.username}
            label="Username"
            type="text"
            onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              value={signUpInput.password}
              label="Password"
              type="password"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              value={signUpInput.confirmPassword}
              label="Confirm Password"
              type="password"
              onChange={handleChange}                  
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>      
  );
};

export default SignUp;
