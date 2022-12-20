import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqBQgqQ427MOKG-NCs2_vdcY7tF8Je7hM",
  authDomain: "movieapp-deb6a.firebaseapp.com",
  projectId: "movieapp-deb6a",
  storageBucket: "movieapp-deb6a.appspot.com",
  messagingSenderId: "889818749530",
  appId: "1:889818749530:web:4ebd9687efca8354985663",
  measurementId: "G-SMCDF4MYTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}