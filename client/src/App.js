//React Import
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Mui Component Import
import Box from '@mui/material/Box'
// Route Resources
import Navbar from './components/Navbar';
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


const drawerWidth = "240ox";

function App() {
  return (
    <Router>          
      <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 4, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
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
    </Router>      
  );
}

export default App;
