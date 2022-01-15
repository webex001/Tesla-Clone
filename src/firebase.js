import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDtma21mbdqz7Gr7jKPOSpvLE9i7EKbv1Q",
    authDomain: "teslaclone-44b04.firebaseapp.com",
    projectId: "teslaclone-44b04",
    storageBucket: "teslaclone-44b04.appspot.com",
    messagingSenderId: "589862638140",
    appId: "1:589862638140:web:1f891d48fbf6ce3d06e939"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export {auth}

  