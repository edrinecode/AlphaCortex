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

const missingKeys = Object.entries(firebaseConfig)
  .filter(([_, value]) => !value)
  .map(([key]) => key);

if (missingKeys.length > 0) {
  const errorMsg = `Missing Firebase configuration keys: ${missingKeys.join(", ")}. Ensure all VITE_FIREBASE_* or FIREBASE_* env variables are set in Vercel.`;
  console.error(errorMsg, {
    availableEnvKeys: Object.keys(env).filter(k => k.includes("FIREBASE")),
    configAttempt: firebaseConfig
  });
  
  // Throwing error here will crash the app, which is what the user is seeing.
  // Let's make it a warning instead so the app can at least mount, 
  // but Firebase features will fail gracefully.
  console.warn("Firebase initialization skipped due to missing config.");
}

// Initialize Firebase only if we have the config
let db: any = null;

try {
  if (missingKeys.length === 0) {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
} catch (err) {
  console.error("Failed to initialize Firebase:", err);
}

export { db };
