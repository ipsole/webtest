import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWK3uQin4iwZGuZUp_K-FwXHLvZTtFD24",
  authDomain: "drilab.firebaseapp.com",
  projectId: "drilab",
  storageBucket: "drilab.firebasestorage.app",
  messagingSenderId: "876505636133",
  appId: "1:876505636133:web:e6173250e1c4487dbd0ecc"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export default app;
