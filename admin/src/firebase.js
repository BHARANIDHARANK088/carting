// 91
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA3VAvqFpcmcGONAO6AxvRc3EK3x8qbFHw",
    authDomain: "netflixclone-cc573.firebaseapp.com",
    projectId: "netflixclone-cc573",
    storageBucket: "netflixclone-cc573.appspot.com",
    messagingSenderId: "272137962553",
    appId: "1:272137962553:web:0366c42847b9daf72a39e8",
    measurementId: "G-5MC65XNL2D"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;