// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyAKBORqvwwoVPavQjWYRBsIiKsPpnAzMDI",
//   authDomain: "portfolio-3d62f.firebaseapp.com",
//   projectId: "portfolio-3d62f",
//   storageBucket: "portfolio-3d62f.appspot.com",
//   messagingSenderId: "174398431968",
//   appId: "1:174398431968:web:ba76399a67746f87776685",
//   measurementId: "G-J9L99MMQC0"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPxjwC-NRIDqN5zCUSEGWB82PiN0eaifM",
  authDomain: "portoflio-dd09d.firebaseapp.com",
  projectId: "portoflio-dd09d",
  storageBucket: "portoflio-dd09d.appspot.com",
  messagingSenderId: "385967089625",
  appId: "1:385967089625:web:2dacd9a1323d8e4202dbc8",
  measurementId: "G-FYYL7N7Y6X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
