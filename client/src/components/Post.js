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
import moment from 'moment';

// export default function Post({ post: { body, dateCreated, id, commentCount, isLiked, likes, likeCount, causedCringe, cringes, cringeCount, imageFlag, image, author}}) {
//     function likePost(){
//         console.log('Like post!');
//     };

//     function cringePost(){
//         console.log('Cringe post!');
//     };

//     function addPostComment(){
//         console.log('Comment on post.');
//     };
    
//     return (
//         <Card variant='outlined'>
//             <CardHeader
//                 avatar={
//                     <Avatar src={author.username}></Avatar>
//                 }
//                 title={author.username}
//                 subheader={moment(dateCreated).fromNow(true)}
//             />
//             <CardContent>
//                 <Typography variant="body2">
//                     {body}
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <Grid container direction='row'>
//                     <Grid item xs={4}>
//                         <IconButton aria-label="cheer this post" onClick={likePost}>
//                             <FavoriteIcon />
//                         </IconButton>
//                         <Typography>
//                             {likeCount}
//                         </Typography>
//                         <IconButton aria-label="cringe this post" onClick={cringePost}>
//                             <SentimentDissatisfied />
//                         </IconButton>
//                         <Typography>
//                             {cringeCount}
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <Button color="secondary" endIcon={<ArrowDropDown />}> {commentCount} Comments </Button>
//                     </Grid>
//                     <Grid item xs={2}>
//                         <Button variant='contained' onClick={addPostComment}> Comment </Button>
//                     </Grid>
//                 </Grid>
//             </CardActions>
//         </Card>
//     )
// }