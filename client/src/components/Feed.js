// React Import
import React from 'react';
import { useQuery } from '@apollo/client';
// MUI Component Import
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// MUI Icon Import
// Resource Import
import Post from './Post';
import { GET_POSTS } from '../utils/queries';

export default function Feed() {
    const { loading, data: { getPosts: posts } } = useQuery(GET_POSTS);
    
    return (
        <Grid container>
            {loading ? (
                <Typography variant="h5">
                    Loading posts...
                </Typography>
            ):(
                posts && posts.map(post => (
                    <Grid item key={post.id}>
                        {/* <Post post={post} /> */}
                    </Grid>
                ))
            )}
        </Grid>
    )
}