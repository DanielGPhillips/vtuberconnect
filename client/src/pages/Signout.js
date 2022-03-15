import React from 'react';
import Auth from '../utils/auth';

function Signout() {
    Auth.signout();
    return (
        <div>Thank you for using Vycelium!</div>
    )
}

export default Signout