import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //config
  apiKey: "AIzaSyANh5G0UMCxBOpzP068Aze83EvvXmIyWKg",
  authDomain: "fir-otp-f846d.firebaseapp.com",
  projectId: "fir-otp-f846d",
  storageBucket: "fir-otp-f846d.appspot.com",
  messagingSenderId: "55588416968",
  appId: "1:55588416968:web:75d5d9a4e6503b257ae4fd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);