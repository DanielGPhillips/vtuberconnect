// React import
import React from 'react';
import { useMutation } from '@apollo/client';
// MUI Import
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
// MUI Icon Import
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// Firebase Import 
import { storage } from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
// Resource import
import moment from 'moment';
import { ADD_PFP } from '../../utils/mutations';
import Auth from '../../utils/auth';
 


function AddProfilePicture() {
    const [pfpState, setPfpState] = React.useState({ userId: '', profilePicture: ''})
    const [pfpSelection, setPfpSelection] = React.useState(null);
    const [addPfp, {error, data}] = useMutation(ADD_PFP);

    function getId() {
        if (Auth.loggedIn()) {
            const id = Auth.getProfile('id_token').data.id
            return id;
        }
    };

    const id = getId();
    
    const pfpSelectedHandler = event => {
        if (event.target.files[0]) {
            setPfpSelection(event.target.files[0]);
        }     
    };

    const pfpUploadHandler = () => {
        if (pfpSelection !== null ) {
            const now = moment().format();   
            const storageRef = ref(storage, 'profileImages/' + id + now)
            const uploadTask = uploadBytesResumable(storageRef, pfpSelection);

            uploadTask.on('state changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                    case 'storage/canceled':
                    // User canceled the upload
                    break;          
                    case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }

            },
            () => {
                    getDownloadURL(uploadTask.snapshot.ref). then((downloadUrl) => {
                        setPfpState({
                            userId: id,
                            profilePicture: downloadUrl
                        })
                    })
                }
            )
        }
    };


    const handlePfpSubmit = async (event) => {
        event.preventDefault();
        try {
            pfpUploadHandler();
            await addPfp({
                variables: { ...pfpState }
            });
            
            Auth.loggedIn()
        } catch (e) {
            console.error(e);
        }

        setPfpSelection(null)
    };

    return (
        <Grid container direction="row" mt={2} mb={2}>
            <Grid item>
                <Grid container direction="column">
                    <Grid item mb={1}>
                        <Typography variant="h5">
                            Upload a Profile Photo
                        </Typography>
                    </Grid>
                    <Grid item>
                        <label htmlFor="icon-button-file">
                            <Input 
                            accept="image/png" 
                            id="icon-button-file" 
                            type="file"
                            onChange={pfpSelectedHandler} 
                            />
                        </label>
                        <IconButton color="primary" aria-label="upload picture" component="span" onClick={handlePfpSubmit}>
                            <PhotoCamera />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AddProfilePicture