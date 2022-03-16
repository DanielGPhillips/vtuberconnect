// React import
import React from 'react';
import { useMutation } from '@apollo/client';
// MUI Import
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
// MUI Icon Import
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// Firebase Import 
import { storage } from '../../firebase';
// Resource import
import { ADD_PROFILEBANNER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage' 


function AddProfileBanner() {
    const [profileBannerState, setProfileBannerState] = React.useState({ userId: '', profilePicture: ''})
    const [profileBannerSelection, setProfileBannerSelection] = React.useState(null);
    const [addProfileBanner, {error, data}] = useMutation(ADD_PROFILEBANNER);

    function getId() {
        if (Auth.loggedIn()) {
            const id = Auth.getProfile('id_token').data.id
            return id;
        }
    };

    const id = getId();
    
    const profileBannerSelectedHandler = event => {
        if (event.target.files[0]) {
            setProfileBannerSelection(event.target.files[0]);
        }     
    };

    const profileBannerUploadHandler = () => {
        if (profileBannerSelection !== null ) {
            const moment = Date.now   
            const storageRef = ref(storage, 'profileImages/' + id + moment)
            const uploadTask = uploadBytesResumable(storageRef, profileBannerSelection);

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
                        setProfileBannerState({
                            userId: id,
                            profileBanner: downloadUrl
                        })
                    })
                }
            )
        }
    };


    const handleProfileBannerSubmit = async (event) => {
        event.preventDefault();
        try {
            profileBannerUploadHandler();
            await addProfileBanner({
                variables: { ...profileBannerState }
            });
            
            Auth.loggedIn()
        } catch (e) {
            console.error(e);
        }

        setProfileBannerSelection(null)
    };

    return (
        <Grid container direction="row" mt={2} mb={2}>
            <Grid item>
                <Grid container direction="column">
                    <Grid item mb={1}>
                        <Typography variant="h5">
                            Upload a Profile Banner
                        </Typography>
                    </Grid>
                    <Grid item>
                        <label htmlFor="icon-button-file">
                            <Input 
                            accept="image/png" 
                            id="icon-button-file" 
                            type="file"
                            onChange={profileBannerSelectedHandler} 
                            />
                        </label>
                        <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleProfileBannerSubmit}>
                            <PhotoCamera />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AddProfileBanner;