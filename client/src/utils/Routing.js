// React Import
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Resource Import
import Home from '../pages/Home';
import Profile from '../pages/Profile/Profile';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Signout from '../pages/Signout';
import Introduction from '../pages/Introduction';
import Vtubers from '../pages/Vtubers';
import Artists from '../pages/Artists';
import Tutorials from '../pages/Tutorials';
import ATools from '../pages/ATools';
import VTools from '../pages/VTools';
import About from '../pages/About';
import ProfileGenerator from '../pages/Profile/ProfileGenerator';

export default function Routing() {
    return (
      <Routes>
        <Route 
        path="/"
        element={<Home />} 
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
          path="/:profileId"
          element={<Profile />}
        />
        <Route 
          path="/signin" 
          element={<Signin />} 
        />
        <Route
          path="/signout"
          element={<Signout />}
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
    )
}