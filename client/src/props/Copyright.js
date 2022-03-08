import React from 'react';
import { Typography, Link } from '@mui/material';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://vycelium.com/">
          Vycelium
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  };

export default Copyright;