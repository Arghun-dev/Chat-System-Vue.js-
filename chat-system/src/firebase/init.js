// Initialize Firebase
import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAybwR0_jbARzikHmPT5fuMmZlx0od8vP0",
    authDomain: "chat-system-vue.firebaseapp.com",
    databaseURL: "https://chat-system-vue.firebaseio.com",
    projectId: "chat-system-vue",
    storageBucket: "chat-system-vue.appspot.com",
    messagingSenderId: "704943173808",
    appId: "1:704943173808:web:231bfb7cf32241d81c4b75",
    measurementId: "G-E5MS3VZNMV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })


// export firestore database
export default firebaseApp.firestore()
