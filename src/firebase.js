import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'violetboard-6b652.firebaseapp.com',
  projectId: 'violetboard-6b652',
  storageBucket: 'violetboard-6b652.appspot.com',
  messagingSenderId: '725824237624',
  appId: '1:725824237624:web:83c4eb1c2e3fb14fdb36cd',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)
