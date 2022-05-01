import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAv6JnVO2xMtTTF6PG_IBwWYECkPJWpzOs",
  authDomain: "starbuck-clone-acb05.firebaseapp.com",
  projectId: "starbuck-clone-acb05",
  storageBucket: "starbuck-clone-acb05.appspot.com",
  messagingSenderId: "987433352510",
  appId: "1:987433352510:web:bb74d5a8ab789a36f4406f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
