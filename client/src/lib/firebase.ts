import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const env = import.meta.env;

// Support both VITE_ prefixed and non-prefixed env variables
// (Vercel may use non-prefixed names, but Vite requires VITE_ prefix for client-side access)
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || env.FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || env.FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID || env.FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID || env.FIREBASE_APP_ID,
};

if (Object.values(firebaseConfig).some((value) => !value)) {
  console.error(
    "Missing Firebase configuration. Ensure all VITE_FIREBASE_* or FIREBASE_* env variables are set.",
    { firebaseConfig }
  );
  throw new Error(
    "Missing Firebase configuration. Ensure all VITE_FIREBASE_* or FIREBASE_* env variables are set.",
  );
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
