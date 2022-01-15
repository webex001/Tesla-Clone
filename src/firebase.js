import firebase from "firebase"

const firebaseConfig = {
      apiKey: "AIzaSyBS08T8SP3HLK7lopRwon0LWnk-i8iLl5o",
      authDomain: "tesla-clone-f2045.firebaseapp.com",
      projectId: "tesla-clone-f2045",
      storageBucket: "tesla-clone-f2045.appspot.com",
      messagingSenderId: "302541951163",
      appId: "1:302541951163:web:3849781a690485acf4599e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export {auth}

  