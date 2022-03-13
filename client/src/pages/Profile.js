// React Import
import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { Link as RouteLink } from "react-router-dom";
import format from "date-fns/format";
// Redux Import
// import { useDispatch, useSelector } from "react-redux";
// import { getFollowers, getFollowings } from "../redux/followSlice";
// import { getProfile } from "../redux/authSlice";
//MUI Component Import
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Divider, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
//Icon Import
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import YouTubeIcon from '@mui/icons-material/YouTube';
//Resource Import
import Post from "../components/Post";
import zIndex from '@mui/material/styles/zIndex';
// import { followAccount, followingAccount } from "../api";

const Input = styled('input')({
display: 'none',
});


export default function Profile() {
    const theme = useTheme();
    return (
        <Paper elevation={0}>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                {/* Back Button top left corner of banner*/}
                <Box sx={{ width:'650px', height:'120px'}}>
                    <Stack direction="row" spacing={0}>
                    {/* Banner Image  */}
                    <Box component="img" sx={{}} alt="Porfile Banner Image" src='https://via.placeholder.com/650x120' />
                    {/* Button to change Banner Image */}
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <IconButton color="primary" aria-label="upload picture" component="span" edge="end" sx={{position:'relative', top:'80px', left:'-45px', zIndex:'2'}}>
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Stack>
                </Box >
                <Paper elevation={2} bm={6} sx={{ width:'650px', height:'150px'}}>
                    {/* Begin Quasi Header */}
                    <Stack direction="row" spacing={0} alignItems='start' padding={0}>
                        {/* Profile Avatar */}
                        <Badge 
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                            badgeContent={
                                <label htmlFor="icon-button-file">
                                    <Input accept="image/*" id="icon-button-file" type="file" />
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                </label>
                            }
                        >
                            <Avatar 
                                alt='User name profile picture'
                                src='https://via.placeholder.com/124'
                                sx={{ width: '124px', height:'124px', marginTop:'5px', marginLeft:'5px'}}
                                >        
                            </Avatar>
                        </Badge>                             
                        <Stack direction="column" spacing={0} padding= {0}>                     
                            <Stack direction="row" spacing={2} padding={1} margin={0} alignItems='flex-start'>
                                <Typography component="h2" variant='h6'>
                                    <b>USERNAME</b>
                                </Typography>
                                {/* Pirmary Tag */}
                                <Chip label="Primary Tag" color="primary" margin={0}/>
                            </Stack>
                            <Stack direction="row" spacing={2} padding={0} margin={0} alignItems='flex-start'>
                                <Box></Box>
                                <Typography ml={0} variant='subtitle2'>
                                    -- Followers
                                </Typography>
                                <Typography ml={0} variant='subtitle2' >
                                    -- Following
                                </Typography>
                            </Stack>
                        </Stack>  
                        <Box sx={{ width: '200px'}}></Box>
                        <Stack direction="row" spacing={1} padding={1}>
                            <IconButton color="primary" aria-label="main platform" size="medium">
                                <YouTubeIcon />
                            </IconButton>
                            <Button variant="contained" size="small" padding='12px'>Follow</Button>
                        </Stack>                        
                    </Stack>
                </Paper>
                {/* End Quasi Header */}
                {/* About Me/Links  */}
                <Paper elevation={1} mt={8} padding={6} sx={{ width:'650px', height:'200px'}}>
                    <Stack direction='column'>
                        <Box>
                            <Typography>
                                This is a placeholder for that basic ass about me section that will be populated via the db.
                            </Typography>
                        </Box>
                        <Divider />
                        <Box>
                            <Typography>
                            This is a placeholder for the basic ass links someone wants to share...
                            </Typography>                            
                        </Box>
                    </Stack>
                    <Divider />
                    <Post />
                </Paper>
                    {/* About Me */}
                    {/* Social Media Links */}
                {/* End About Me/Links */}
                {/* Begin Quasi Tabbing Pagination */}
                    {/* About universal */}
                    {/* Feed universal */}
                    {/* Portfolio artist and combo */}
                    {/* Videos vtuber and combo */}
                    {/* Lore vtuber and combo  */}
                    {/* Fanart if vtuber and combo only */}

            </Grid>
        </Paper>
    );
}