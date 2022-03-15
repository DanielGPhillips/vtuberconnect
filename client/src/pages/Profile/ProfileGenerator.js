// React Import
import React from 'react';
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
import { ADD_NAME } from '../../utils/mutations'



function ProfileGenerator() {
    // const [formState, setFormState] = useState({
    //     firstName: '',
    //     lastName: '',
    // });

    // const [addName, {error, data}] = useMutation(ADD_NAME);
    
    const handleNameSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <Grid container component='main' sx={{ height: '100vh'}}>
            <Grid item xs={12}  component={Paper} eleveation={6} square>
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                    <Typography component='h1' variant='h5'>
                        Let's Make a Profile!    
                    </Typography>
                    <Box component='form' noValidate onSubmit={handleNameSubmit} sx={{ mt: 1, alignItems: 'center',}}>
                        <Typography component="h2" variant="h6">
                            What's Your Name?
                        </Typography>
                        <TextField 
                            margin="normal" 
                            required 
                            fullWidth 
                            id="firstName" 
                            label="First Name" 
                            name="firstName" 
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                        />
                        <Button 
                            type= "submit"
                            fullwidth
                            variant= "contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Grid>
            {/* First and Last Name */}
            {/* Profile Image */}
            {/* Vtuber, Artist Selection */}
            {/* Primary Language Selection */}
            {/* Primary Tag Selection */}
            {/* Primary Platform */}
        </Grid>
    )
}

export default ProfileGenerator