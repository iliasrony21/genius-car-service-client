// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDfVsXUsFOfSm4rGNApM5vuG4A0h8NiKio',
  authDomain: 'car-store-95bbd.firebaseapp.com',
  projectId: 'car-store-95bbd',
  storageBucket: 'car-store-95bbd.appspot.com',
  messagingSenderId: '782031690198',
  appId: '1:782031690198:web:ad8191cf32acda55de2c77'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
