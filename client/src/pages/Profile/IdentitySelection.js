import React from 'react';

export default function IdentitySelector ({ profileId }) {
    const [switchState, setSwitchState] = useState({
        vtuber: false,
        artist: false
    });
    const handleSwitchChange = (event) => {
        setSwitchState({
            ...switchState,
            [event.target.name]: event.target.checked,
        });
        console.log(switchState)
    };
    return (
        <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Pick an Identity</FormLabel>
                <FormGroup>
                    <FormControlLabel
                    control={
                        <Switch checked={switchState.vtuber} onChange={handleSwitchChange} name="vtuber" />
                    }
                    label="Vtuber"
                    />
                    <FormControlLabel
                    control={
                        <Switch checked={switchState.artist} onChange={handleSwitchChange} name="artist" />
                    }
                    label="Artist"
                    />
                </FormGroup>
            <FormHelperText>Don't worry you can change this later!</FormHelperText>
        </FormControl>
    )
}; 