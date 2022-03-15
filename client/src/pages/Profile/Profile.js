// React Import
import React, { useEffect } from 'react';
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
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
import PostCreate from "../../components/PostCreate";
import Post from "../../components/Post";
import ProfileFeed from "../../components/ProfileFeed";
import { QUERY_SINGLE_PROFILE, QUERY_PROFILE_SELF} from '../../utils/queries';
// import { followAccount, followingAccount } from "../api";

const Input = styled('input')({
display: 'none',
});


export default function Profile() {
    const theme = useTheme();
    const { userId } = useParams();

    // const { loading, data} = useQuery(
    //     userId ? QUERY_SINGLE_PROFILE : QUERY_PROFILE_SELF,
    //     {
    //         variables: { userId: userId},
    //     } 
    // );

    // const profile = data?.me || data?.profile || {};

    // // if (AuthenticationAssertionResponse.loggedIn() && AuthenticationAssertionResponse.getProfile().data.id === userId) {
    // //     return <Navigate to="/me" />;
    // // }

    // if (loading) {
    //     return <div>Loading...</div>
    // }

    // if (!profile?.name) {
    //     return (
    //         <h4>
    //             You need to be logged in to see your profile page. Use the navigation links above to sign up or login!
    //         </h4>
    //     );
    // }

    return (
        <Paper elevation={0}>
            <Grid container direction="column">
                {/* Back Button top left corner of banner*/}
                <Grid container>
                    <Grid item>
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
                            <Box 
                            component="img" 
                            alt="Porfile Banner Image" 
                            src='https://via.placeholder.com/650x120'
                            sx={{ width:'100%'}}
                            />
                        </Badge>
                    </Grid>
                </Grid >
                <Paper elevation={2} bm={6}>
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
                                sx={{ width: '100px', height:'100px', marginTop:'5px', marginLeft:'5px'}}
                                >        
                            </Avatar>
                        </Badge>
                        <Grid container direction="column">                          
                            <Grid container direction="row">
                                <Grid item xs={8}>
                                    <Stack direction="column" spacing={0} padding= {0}>                     
                                        <Stack direction="row" spacing={2} padding={1} margin={0} alignItems='flex-start'>
                                            <Typography component="h1" variant='h5'>
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
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack direction="row" spacing={1} padding={1}>
                                        <IconButton color="primary" aria-label="main platform" size="medium">
                                            <YouTubeIcon />
                                        </IconButton>
                                        <Button variant="contained" size="small" padding='1px'>Follow</Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item>
                                    <Typography ml={2} variant='subtitle2'>
                                        This is a placeholder for that basic ass about me section that will be populated via the db.
                                    </Typography>                        
                                </Grid>
                                <Grid item>
                                    <Typography ml={2} variant='subtitle2'>
                                        Links
                                    </Typography> 
                                </Grid>
                            </Grid>
                        </Grid>                         
                    </Stack>
                </Paper>                                      
                <Divider />
                <PostCreate />              
                <Divider />
                <ProfileFeed />
                <Post />
                
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