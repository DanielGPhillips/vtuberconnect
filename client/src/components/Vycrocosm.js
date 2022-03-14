// React Import
import React from 'react';
// Mui Component Import
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// Mui Icon Import
// Resource Import

export default function Vycrocosm() {
  return (
    <Paper elevation={1}>
        {/* Navyigation across User Islands */}
        <Box>
          <Grid container>
            
          </Grid>
        </Box>
        {/* Base Profile Build */}
        <Tabs value={value} onChange={handleChange} aria-label="Microcosm Navigation">
            <Tab>Feed</Tab>
        </Tabs>
        {/* Base Vtuber Build */}
        <Tabs value={value} onChange={handleChange} aria-label="Microcosm Navigation">
            <Tab>About</Tab>
            <Tab>Lore</Tab>
            <Tab>Videos</Tab>
            <Tab>Art/Fanart</Tab>
            <Tab>Stats</Tab>
        </Tabs>
        {/* Base Artist Build */}
        <Tabs value={value} onChange={handleChange} aria-label="Microcosm Navigation">
            <Tab>About</Tab>
            <Tab>Portfolio</Tab>
            <Tab>Terms</Tab>
            <Tab>Pricing</Tab>
            <Tab>Reviews</Tab>
        </Tabs>
    </Paper>
  )
}
