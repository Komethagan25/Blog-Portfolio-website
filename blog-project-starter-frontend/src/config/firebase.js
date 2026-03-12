import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC5V8Ajiee16-bdbf4WZf7mtIyFrZ0N3D4",
  authDomain: "blog-app-2fecb.firebaseapp.com",
  projectId: "blog-app-2fecb",
  storageBucket: "blog-app-2fecb.firebasestorage.app",
  messagingSenderId: "292453770760",
  appId: "1:292453770760:web:9b1161f42d4da0cbdb53bd",
  measurementId: "G-QBH2WTCR61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

export default auth;