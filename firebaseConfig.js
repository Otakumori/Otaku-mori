// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP01Hi8tBNcZzl4MAPPLGA5zUaSRNNI-4",
  authDomain: "otaku-mori.firebaseapp.com",
  projectId: "otaku-mori",
  storageBucket: "otaku-mori.firebasestorage.app",
  messagingSenderId: "579739041870",
  appId: "1:579739041870:web:cc91201750f5b240e3831f",
  measurementId: "G-GEKT6PWNXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;
