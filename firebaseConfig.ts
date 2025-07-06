import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native'; 
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAaedVRibTzBXEzJZgeroR9LNgNs_H6e4k",
  authDomain: "petalerta-f62d6.firebaseapp.com",
  projectId: "petalerta-f62d6",
  storageBucket: "petalerta-f62d6.appspot.com",
  messagingSenderId: "388011468744",
  appId: "1:388011468744:web:f8867023355648132e02fd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { db, storage, auth };