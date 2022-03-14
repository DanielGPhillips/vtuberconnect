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
import { styled } from '@mui/material/styles';
// Mui Icon Import
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({
    display: 'none',
    });

export default function PostCreate() {
  return (
    <Paper elevation={2} sx={{ marginTop:'5px'}}>
        <Grid container direction="column">
            <Grid container direction="row">
                <Grid item xs={3} sm={2}>
                    <Avatar sx={{ marginTop:'5px', marginLeft:'10px', marginRigh:'10px'}}></Avatar>
                </Grid>
                <Grid item xs={9} sm={10}>
                    <TextField
                    id="textarea"
                    variant="standard"
                    label="create post text input"
                    placeholder="Spread the word..."
                    multiline
                    mt={6}
                    sx={{ width:'95%'}}
                    />
                </Grid>
            </Grid>

            <Grid container direction="row">                
                <Grid item xs={2} alignContent="center" />     
                <Grid item xs={10} alignContent="center">
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </label>           
                    <Button variant='contained' size='small' sx={{ float:'right', marginTop:'5px', marginRight:'15px'}}>Post</Button>
                </Grid>                
            </Grid>
        </Grid>        
        
    </Paper>
  )
}

