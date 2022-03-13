//React Import
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Mui Component Import
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material';
// Route Resources
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Introduction from './pages/Introduction';
import Vtubers from './pages/Vtubers';
import Artists from './pages/Artists';
import Tutorials from './pages/Tutorials';
import ATools from './pages/ATools';
import VTools from './pages/VTools';
import About from './pages/About';
import ProfileGenerator from './pages/ProfileGenerator';

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

const drawerWidth = 240;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>      
        <Navbar />
          <Box component="main" sx={{ flexGrow: 1, p: '65px', width: `calc(100% - 240px)` }}>
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/profilegen" 
                element={<ProfileGenerator />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route 
                path="/signin" 
                element={<Signin />} 
              />
              <Route 
                path="/profiles/:profileId" 
                element={<Profile />} 
              />
              <Route
                path="/introduction"
                element={<Introduction />}
              />
              <Route
                path="/vtubers"
                element={<Vtubers />}
              />
              <Route
                path="/artists"
                element={<Artists />}
              />
              <Route
                path="/tutorials"
                element={<Tutorials />}
              />
              <Route
                path="/vtools"
                element={<VTools />}
              />
              <Route
                path="/atools"
                element={<ATools />}
              />
              <Route
                path="/about"
                element={<About />}
              />
            </Routes>
          </Box>
      </ThemeProvider>  
    </Router>      
  );
}

export default App;
