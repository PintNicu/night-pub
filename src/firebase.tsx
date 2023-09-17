import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase, signOut as signOutFirebase } from 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const app = initializeApp(config);
const auth = getAuth(app);

export const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPasswordFirebase(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await signOutFirebase(auth);
    console.log("Successfully signed out.");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export { auth };
