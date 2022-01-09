import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpYElFlGMO2Q3iH9At6E4H3U_Ny8ILz-4',
  authDomain: 'house-marketplace-project.firebaseapp.com',
  projectId: 'house-marketplace-project',
  storageBucket: 'house-marketplace-project.appspot.com',
  messagingSenderId: '232694460161',
  appId: '1:232694460161:web:b9e259ffa3f4cb8fc47500',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
