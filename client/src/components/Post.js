// React Import
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
// MUI Component Import
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
// MUI Icon Import
import FavoriteIcon from '@mui/icons-material/Favorite';
import SentimentDissatisfied from'@mui/icons-material/SentimentDissatisfied';
import ShareIcon from '@mui/icons-material/Share';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
// Resource Import
import Auth from '../utils/auth'

export default function Post() {
    return (
        <Card variant='outlined'>
            <CardHeader
                avatar={
                    <Avatar></Avatar>
                }
                title="Username"
                subheader="Time Posted"
            />
            <CardContent>
                <Typography variant="body2">
                    This is a placeholder for the post body text.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Grid container direction='row'>
                    <Grid item xs={4}>
                        <IconButton aria-label="cheer this post">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="cringe this post">
                            <SentimentDissatisfied />
                        </IconButton>
                        <IconButton aria-label="share this post">
                            <ShareIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <Button color="secondary" endIcon={<ArrowDropDown />}> X Comments </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant='contained'> Comment </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}