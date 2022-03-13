// React Import
import React from 'react';
// Mui Component Import
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
// import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
// Mui Icon Import
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({
    display: 'none',
    });

export default function Post() {
  return (
    <Paper elevation={3} sx={{ marginTop:'5px'}}>
        <Grid container>
            <Grid item xs={1}>
                <Avatar sx={{ marginTop:'5px', marginLeft:'10px'}}></Avatar>
            </Grid>
            <Grid item xs={11}>
                <TextField
                id="outlined-textarea"
                label=""
                placeholder="Spread the word"
                multiline
                sx={{ width:'100%'}}
                />
                <Box  sx={{ justifyContent:'space-between', alignItems: 'center' }}>       
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </label>           
                    <Button variant='contained' size='small' sx={{ float:'right', marginTop:'5px', marginRight:'5px'}}>Post</Button>
                </Box>                
            </Grid>
        </Grid>        
        
    </Paper>
  )
};

