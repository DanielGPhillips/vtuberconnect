//React Import
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Mui Component Import
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material';
// Route Resources
import Navbar from './components/Navbar';
import Routing from './utils/Routing';


const theme = createTheme ({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6800',
    },
    secondary: {
      main: '#FFB27E',
    },
    error: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>    
        <Navbar />
        <Grid container direction="row">
          <Grid item xs={0} sm={3} ></Grid>
          <Grid item xs={12} sm={6} mt={8}>
              <Routing />
          </Grid>            
          <Grid item xs={0} sm={3} ></Grid>
        </Grid>        
      </ThemeProvider>  
    </Router>      
  );
}

export default App;
