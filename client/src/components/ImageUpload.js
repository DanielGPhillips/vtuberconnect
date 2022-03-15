import React from 'react';
import { storage } from '../firebase/index';

const ImageUpload = (props) =>{
    const uploadTask = storage.ref().put();
    uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {
            console.log(error);
        }, 
        () => {
            storage
                .ref()
                .child()
                .getDownload
        }
    )
}

export default ImageUpload