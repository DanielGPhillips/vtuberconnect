// React Import
import React, {useState} from 'react';
// Mui Component Import
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// Apollo Import 
import { useMutation } from '@apollo/client';
// Resource Import
import { ADD_PROFILE } from '../../utils/mutations';
import AddProfilePicture from './AddProfilePicture';
import AddProfileBanner from './AddProfileBanner';



function ProfileGenerator() {
    const [addProfile, { error, data }] = useMutation(ADD_PROFILE);
    const [profileInput, setFormState] = useState({
        about: '',
        primaryPlatform: '',    
        primaryLanguage: '',
        primaryTag: '',   
    });
    
    
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...profileInput,
          [name]: value,
        });
        console.log(profileInput);
    };    
    
    const handleProfileSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <Grid container component='main' sx={{ height: '100vh'}}>
            <Grid item xs={12}  component={Paper} eleveation={6} square>
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                    <Typography component='h1' variant='h3' mt={6} mb={6}>
                        Let's Make a Profile!    
                    </Typography>
                    <AddProfilePicture />
                    <AddProfileBanner />
                    <Box component='form' noValidate onSubmit={handleProfileSubmit} sx={{ mt: 1, alignItems: 'center',}}>
                        <Typography component="h2" variant="h6">
                            Tell a little about yourself...
                        </Typography>
                        <TextField 
                            margin="normal" 
                            required 
                            fullWidth 
                            id="aboutMe" 
                            label="About Me" 
                            name="aboutMe"
                            value={profileInput.about}
                            onChange={handleChange}
                        />
                        <Typography component="h2" variant="h6">
                            Where do you predominantly hang out...
                        </Typography>
                        <TextField 
                            margin="normal" 
                            required 
                            fullWidth 
                            id="primaryPlatform" 
                            label="Primary Platform" 
                            name="primaryPlatform"
                            value={profileInput.primaryPlatform}
                            onChange={handleChange}
                        />
                        <Typography component="h2" variant="h6">
                            What language do you primarily speak...
                        </Typography>
                        <TextField 
                            margin="normal" 
                            required 
                            fullWidth 
                            id="primaryLanguage" 
                            label="Primary Language" 
                            name="primaryLanguage"
                            value={profileInput.primaryLanguage}
                            onChange={handleChange}
                        />
                        <Typography component="h2" variant="h6">
                            What would you consider your main Tag? ex. Fan, ENVTuber, Rigger, Illustrator, etc.
                        </Typography>
                        <TextField 
                            margin="normal" 
                            required 
                            fullWidth 
                            id="primaryTag" 
                            label="Primary Tag" 
                            name="primaryTag"
                            value={profileInput.primaryTag}
                            onChange={handleChange}
                        />
                        
                        <Button 
                            type= "submit"
                            variant= "contained"
                            onClick={handleProfileSubmit}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProfileGenerator