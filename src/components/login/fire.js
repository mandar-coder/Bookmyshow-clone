import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBthQu5y-FfpPYmaHdiOV-ueadxF3KVDFc",
  authDomain: "bookmyshow-2733e.firebaseapp.com",
  projectId: "bookmyshow-2733e",
  storageBucket: "bookmyshow-2733e.appspot.com",
  messagingSenderId: "414538544153",
  appId: "1:414538544153:web:a65e5cebf2c7b8f2052688"
};

// Initialize Firebase
  const fire = Firebase.initializeApp(firebaseConfig);

  export default fire;