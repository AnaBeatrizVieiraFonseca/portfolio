// Firebase config e inicialização
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Adicione outros SDKs conforme necessário

const firebaseConfig = {
  apiKey: "AIzaSyDeQGNbcDSkw0r5W5s86n-E1dMVrGAIZcs",
  authDomain: "portfolio-e9d63.firebaseapp.com",
  projectId: "portfolio-e9d63",
  storageBucket: "portfolio-e9d63.appspot.com",
  messagingSenderId: "187827777805",
  appId: "1:187827777805:web:81d52f89b32096be12c044",
  measurementId: "G-PV2QRF26DL"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
