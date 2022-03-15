import {initializeApp} from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDf88zTF7gv4dLSzlF4RjAq3s6xYkii338",
    authDomain: "vycelium-aef5c.firebaseapp.com",
    projectId: "vycelium-aef5c",
    storageBucket: "vycelium-aef5c.appspot.com",
    messagingSenderId: "473012584437",
    appId: "1:473012584437:web:9131bfb7f2fd575613eabc",
    measurementId: "G-BWSBXE0RXN"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp);
  
  export const postImagesRef = ref(storage, 'postImages');
  export const profileImagesRef = ref(storage, 'profileImages');
  export const bannerImagesRef = ref(storage, 'bannerImages');

