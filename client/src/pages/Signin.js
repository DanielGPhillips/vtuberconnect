// Import React
import React, {useState} from 'react';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
//Import MUI Components
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography'
//Import Apollo
import { useMutation } from '@apollo/client';
// Import Assets
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import Copyright from '../props/Copyright';


export default function Login() {
    const [userLoginInput, setFormState] = useState({
        email: '',
        password: '',
    });
    
    const [login, {error, data}] = useMutation(LOGIN_USER, {
      // variables: {
      //   UserLoginInput: loginInput
      // }
    })
    
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...userLoginInput,
            [name]: value,
        });
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(userLoginInput);
      // const data = new FormData(event.currentTarget);
      try {
          const { data } = await login({
              variables: {
                userLoginInput: { ...userLoginInput },
              },
          });
          console.log(data);
          Auth.login(data.login.token);
      } catch (e) {
          console.error(e);
      };

      setFormState({
        email: '',
        password: '',
      });
    };



  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      {/*
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/vycelium-aef5c.appspot.com/o/images%2FpostImages%2F622d1c7a44b525c64a22754ffunction%20now()%20%7B%20%5Bnative%20code%5D%20%7D?alt=media&token=48c6fd20-d960-4ce0-9efb-7af4fa8072c8)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      /> */}
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
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value={userLoginInput.email}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={userLoginInput.password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to='/signup' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>    
  );
}